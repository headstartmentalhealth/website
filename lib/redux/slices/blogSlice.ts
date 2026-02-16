import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Define types based on backend DTOs/Entities
// We can approximate or share types if possible, but for now defining here
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  cover_image?: string;
  category?: string;
  is_published: boolean;
  published_at?: string;
  author?: {
    id: string;
    name: string;
  };
  created_at: string;
  updated_at: string;
}

interface BlogState {
  posts: BlogPost[];
  currentPost: BlogPost | null;
  loading: boolean;
  error: string | null;
  total: number;
}

const initialState: BlogState = {
  posts: [],
  currentPost: null,
  loading: false,
  error: null,
  total: 0,
};

const API_URL = process.env.NEXT_PUBLIC_API_URL + '/v1';

export const fetchBlogPosts = createAsyncThunk(
  'blog/fetchBlogPosts',
  async (params: { q?: string; category?: string; page?: number; limit?: number } = {}, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/public/blog-posts`, { params });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch blog posts');
    }
  }
);

export const fetchBlogPost = createAsyncThunk(
  'blog/fetchBlogPost',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/public/blog-posts/${id}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch blog post');
    }
  }
);

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    clearCurrentPost: (state) => {
      state.currentPost = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch All
      .addCase(fetchBlogPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload.data;
        state.total = action.payload.count;
      })
      .addCase(fetchBlogPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Fetch Single
      .addCase(fetchBlogPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogPost.fulfilled, (state, action) => {
        state.loading = false;
        state.currentPost = action.payload.data;
      })
      .addCase(fetchBlogPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearCurrentPost } = blogSlice.actions;
export default blogSlice.reducer;
