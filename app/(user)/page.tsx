import PostList from '@/components/PostList';
import PreviewPostList from '@/components/PreviewPostList';
import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import { previewData } from 'next/headers';
import PreviewSuspense from '../../components/PreviewSuspense';

const query = groq`
  *[_type=='post']{
    ...,
    author->,
    category->[]
  } | order(_createdAt desc)
`;
export default async function Home() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div
            className='mx-auto underline text-center font-bold'
            role={'status'}>
            <p className='text-lg animate-pulse text-[#F7AB0A]'>
              Loading preview data...
            </p>
          </div>
        }>
        <PreviewPostList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  return <PostList posts={posts} />;
}
