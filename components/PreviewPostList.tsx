'use client';
import { usePreview } from '../lib/sanity.preview';
import PostList from './PostList';

type Props = {
  query: string;
};

function PreviewPostList({ query }: Props) {
  const posts = usePreview(null, query);

  return <PostList posts={posts} />;
}

export default PreviewPostList;
