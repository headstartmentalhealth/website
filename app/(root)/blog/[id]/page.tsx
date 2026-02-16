'use client';

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { fetchBlogPost, clearCurrentPost } from '@/lib/redux/slices/blogSlice';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const BlogPostDetail = () => {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const dispatch = useAppDispatch();
  const { currentPost, loading, error } = useAppSelector((state) => state.blog);

  useEffect(() => {
    if (id && typeof id === 'string') {
      dispatch(fetchBlogPost(id));
    }

    return () => {
      dispatch(clearCurrentPost());
    };
  }, [dispatch, id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-red-600">
        <p className="text-xl mb-4">Error loading blog post: {error}</p>
        <Link href="/blog" className="text-indigo-600 hover:text-indigo-800 underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  if (!currentPost) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-500">
        <p className="text-xl mb-4">Blog post not found.</p>
        <Link href="/blog" className="text-indigo-600 hover:text-indigo-800 underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-40 pb-20 px-4 sm:px-6 lg:px-8">
      <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="relative h-64 sm:h-96 w-full bg-gray-200">
          {currentPost.cover_image ? (
            <Image
              src={currentPost.cover_image}
              alt={currentPost.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400 text-lg">
              No Cover Image
            </div>
          )}
          <div className="absolute top-4 left-4">
            <Link href="/blog" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white/90 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 backdrop-blur-sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </div>

        <div className="px-6 py-8 sm:px-10">
          <div className="flex items-center justify-between mb-6">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              {currentPost.category || 'General'}
            </span>
            <time dateTime={currentPost.published_at} className="text-sm text-gray-500">
              {currentPost.published_at ? new Date(currentPost.published_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
            </time>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
            {currentPost.title}
          </h1>

          <div className="flex items-center mb-8 border-b border-gray-100 pb-8">
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                By {currentPost.author?.name || 'Unknown Author'}
              </p>
            </div>
          </div>

          <div className="prose prose-indigo max-w-none text-gray-700">
            {/* Using dangerouslySetInnerHTML if content is HTML from a rich text editor. 
                 Ensure content is sanitized on backend or here if untrusted. 
                 Assuming backend sanitizes or trusted admin input. */}
            <div dangerouslySetInnerHTML={{ __html: currentPost.content }} />
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPostDetail;
