import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, userId, content }) => {
  return (
    <>
      <div>
        <span>User:{userId}</span>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </>
  );
};

export default PostCard;
