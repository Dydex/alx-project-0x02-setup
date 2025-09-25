import Card from '@/components/common/Card';
import { useState } from 'react';
import PostModal from '@/components/common/PostModal';
import { Post } from '@/interfaces';
import Header from '@/components/layout/Header';

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };
  return (
    <section>
      <Header />
      <Card title='Bag' content='This is the Bag' />
      <h1>This is the Home Page</h1>

      <button onClick={() => setIsModalOpen(true)} className=''>
        + Create Post
      </button>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />

      <div>
        {posts.map((post, index) => (
          <div key={index} className=''>
            <h3> {post.title} </h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
