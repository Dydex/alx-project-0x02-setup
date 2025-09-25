import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

const Posts: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
  return (
    <>
      <Header />
      <div>
        <h1>Posts Page</h1>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  );
  const data = await res.json();

  const posts: PostProps[] = data.map((post: any) => ({
    userId: post.userId,
    id: post.id,
    title: post.title,
    content: post.body,
  }));

  return { props: { posts } };
}

export default Posts;
