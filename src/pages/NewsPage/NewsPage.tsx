import News from '@/components/News/News';
import { Meta, Title } from 'react-head';

export interface NewsPageProps {}

const NewsPage = ({}: NewsPageProps) => {
  return (
    <>
      <Title>News | Petlove</Title>
      <Meta
        name="description"
        content="Read the latest news about animals: rescue stories, issues of stray pets, the impact of animals on people, controversies, and events from the world of pets."
      />
      <News />
    </>
  );
};

export default NewsPage;
