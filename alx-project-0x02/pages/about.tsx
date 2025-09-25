import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <div>
        <h1>This is the About Page</h1>;
        <Button title='Small Button' size='small' shape='rounded-sm' />
        <Button title='Medium Button' size='medium' shape='rounded-md' />
        <Button title='Large Button' size='large' shape='rounded-full' />
      </div>
    </>
  );
};

export default AboutPage;
