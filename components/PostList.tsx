import urlFor from '@/lib/urlFor';
import Image from 'next/image';

type Props = {
  posts: Post[];
};
function PostList({ posts }: Props) {
  return (
    <div className='conainer mx-auto my-4 w-full'>
      <hr className='border-gray-100 border-1 mb-10 mt-4 w-full' />
      <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 gap-y-16 w-full'>
        {posts.map((post) => (
          <div key={post._id} className='group cursor-pointer'>
            <div className='w-full relative h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out'>
              <Image
                src={urlFor(post.mainImage).url() || ''}
                alt={post.author.name}
                className='object-cover object-left lg:object-center'
                fill
              />
              <div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between '>
                <div>
                  <p className='font-bold'>{post.title}</p>
                  <p>
                    {new Date(post._createdAt).toLocaleDateString('en-Us', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
                <div className='flex flex-col md:flex-row gap-y-2 space-x-2 items-center'>
                  {post.categories.map((category) => (
                    <div
                      key={category._id}
                      className='bg-gradient-to-br from-[#F7AB0A] via-yellow-400 to-[#E7AA56] text-center text-black px-3 py-1 rounded-xl text-sm font-semiblod h-fit'>
                      <p>{category._type}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostList;
