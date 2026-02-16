'use client';

import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { fetchBlogPosts } from '@/lib/redux/slices/blogSlice';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';

const Blog = () => {
  const dispatch = useAppDispatch();
  const { posts, loading, error } = useAppSelector((state) => state.blog);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchBlogPosts({}));
  }, [dispatch]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(fetchBlogPosts({ q: searchTerm }));
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200">
      {/* Hero Section */}
      <div className="bg-primary-50 dark:bg-gray-800 pt-40 pb-20 sm:py-24 transition-colors duration-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-secondary-main dark:text-white sm:text-6xl mb-6 font-dm-sans">
            Our Blog
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-secondary-main/80 dark:text-gray-300 font-dm-sans">
            Latest insights, industry trends, and updates from the Headstart Connect team.
            Stay informed and empowered.
          </p>

          {/* Search Bar */}
          <div className="mt-10 max-w-xl mx-auto">
            <form onSubmit={handleSearch} className="relative flex items-center">
              <input
                type="text"
                className="block w-full rounded-full border-0 py-4 pl-14 pr-14 text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary-main dark:bg-gray-900 sm:text-sm sm:leading-6 transition-colors duration-200"
                placeholder="Search articles, topics, etc..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <button
                type="submit"
                className="absolute right-2.5 top-2.5 rounded-full bg-primary-main px-6 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-main transition-colors duration-200"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
        {loading && (
          <div className="flex justify-center my-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-main"></div>
          </div>
        )}

        {error && (
          <div className="text-center my-20">
            <div className="inline-flex items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20 p-2 mb-4">
              <div className="rounded-full bg-red-200 dark:bg-red-900/40 p-2">
                <span className="text-red-600 dark:text-red-400 text-xl font-bold">!</span>
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Oops! Something went wrong.</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-1">{error}</p>
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="text-center my-20">
            <div className="inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 p-6 mb-4">
              <Search className="h-10 w-10 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">No content found</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              We couldn't find any articles matching your search. Try different keywords.
            </p>
            {searchTerm && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  dispatch(fetchBlogPosts({}));
                }}
                className="mt-6 text-primary-main hover:text-primary-400 font-medium"
              >
                Clear search and show all
              </button>
            )}
          </div>
        )}

        <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="flex flex-col items-start group"
            >
              <div className="relative w-full aspect-[16/9] rounded-2xl bg-gray-100 dark:bg-gray-800 overflow-hidden sm:aspect-[2/1] lg:aspect-[3/2] border border-gray-200 dark:border-gray-700">
                {post.cover_image ? (
                  <Image
                    src={post.cover_image}
                    alt={post.title}
                    fill
                    className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full w-full bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600">
                    <span className="text-sm font-medium">No Image</span>
                  </div>
                )}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.published_at} className="text-gray-500 dark:text-gray-400">
                    {post.published_at ? new Date(post.published_at).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    }) : 'Just now'}
                  </time>
                  {post.category && (
                    <span
                      className="relative z-10 rounded-full bg-primary-100 dark:bg-primary-900/30 px-3 py-1.5 font-medium text-primary-600 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors"
                    >
                      {post.category}
                    </span>
                  )}
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-primary-main dark:group-hover:text-primary-400 transition-colors">
                    <span className="absolute inset-0" />
                    {post.title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    {post.excerpt || post.content.replace(/<[^>]+>/g, '').substring(0, 150) + '...'}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      <span className="absolute inset-0" />
                      {post.author?.name || 'Headstart Team'}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">Author</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
