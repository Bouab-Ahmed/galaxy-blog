import RichTextComponent from '@/components/RichTextComponent';
import { client } from '@/lib/sanity.client';
import urlFor from '@/lib/urlFor';
import PortableText from 'react-portable-text';
import { groq } from 'next-sanity';
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};

async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
      ...,
      title,
      _createdAt,
      mainImage,
      author->,
      "categories": categories[]->title,
    }
  `;

  const post = await client.fetch(query, { slug });

  console.log(post.body);

  return (
    <article className='px-10 pb-28 mt-5'>
      <section className='space-y-2 border border-black border-opacity-5 text-white'>
        <div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
          <div className='absolute top-0 w-full h-full opacity-10 blur-sm p-10'>
            <Image
              className='object-cover object-center mx-auto'
              src={urlFor(post.mainImage).url() || ''}
              alt={post.author.name}
              fill
            />
          </div>

          <section className='p-5 bg-[#F7AB0A] w-full'>
            <div className='flex flex-col md:flex-row justify-between items-start gap-y-5'>
              <div className='w-full md:w-[80%]'>
                <h1 className='text-4xl font-extrabold'>{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <div className='flex items-center space-x-2'>
                <Image
                  className='rounded-full'
                  src={urlFor(post.author.image).url() || ''}
                  alt={post.author.name}
                  width={40}
                  height={40}
                />

                <div>
                  <h3 className='text-lg font-bold'>{post.author.name}</h3>
                  <div>{/* author bio */}</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className='italic pt-10'>{post.description}</h2>
              <div className='flex items-center justify-end mt-auto space-x-2'>
                {post.catergories &&
                  post.categories.map((category: Category) => (
                    <p
                      key={category._id}
                      className='bg-gray-800 text-whit px-3 py-1 rounded-full text-sm font-semibold mt-4 w-fit'>
                      {/* @ts-ignore */}
                      {category}
                    </p>
                  ))}
              </div>
            </div>
          </section>
        </div>
      </section>
      <div className='flex flex-col items-center px-16 my-10'>
        <PortableText
          content={post.body}
          projectId='oylc6q26'
          dataset='production'
          serializers={{
            h1: (props: any) => (
              <h1 className='my-4 text-3xl font-bold' {...props} />
            ),
            h2: (props: any) => (
              <h2 className='my-2 text-lg font-bold' {...props} />
            ),
            h3: (props: any) => (
              <h3 className='my-2 text-base font-bold' {...props} />
            ),
            h4: (props: any) => (
              <h4 className='my-2 text-base font-bold' {...props} />
            ),
            h5: (props: any) => (
              <h5 className='my-2 text-base font-bold' {...props} />
            ),
            h6: (props: any) => (
              <h6 className='my-2 text-base font-bold' {...props} />
            ),
            normal: (props: any) => (
              <p
                className='text-base py-1 leading-6 text-gray-900'
                {...props}
              />
            ),
            strong: (props: any) => (
              <strong className='font-bold text-black' {...props} />
            ),
            em: (props: any) => <em className='italic text-black' {...props} />,
            bold: (props: any) => (
              <strong className='font-bold text-black' {...props} />
            ),
            blockquote: (props: any) => (
              <blockquote
                className='w-full text-center text-gray-600 text-3xl italic font-normal my-5 font-lobster py-2 px-20'
                {...props}
              />
            ),
            pre: (props: any) => <pre style={{ color: 'red' }} {...props} />,
            ol: (props: any) => (
              <ol className='list-decimal ml-4 my-2' {...props} />
            ),
            ul: (props: any) => <ul className='list-item' {...props} />,
            li: (props: any) => <li className={`pb-3`} {...props} />,
            a: (props: any) => <a style={{ color: 'red' }} {...props} />,
            mainImage: (props: any) => (
              <div className='relative w-full h-96 m-10 mx-auto'>
                <Image {...props} alt='' className='object-contain' />
              </div>
            ),
          }}
        />
      </div>
    </article>
  );
}

export default Post;
