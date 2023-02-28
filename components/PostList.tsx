type Props = {
  posts: Post[];
};
function PostList({ posts }: Props) {

  console.log('posts : ', posts.length);

  return <div>PostList</div>;
}

export default PostList;
