import NotFound from '@/components/NotFound/NotFound';
import { Meta, Title } from 'react-head';

export interface NotFoundPageProps {}

const NotFoundPage = ({}: NotFoundPageProps) => {
  return (
    <>
      <Title>Not Found | Petlove</Title>
      <Meta name="description" content="This page not found" />
      <NotFound />
    </>
  );
};

export default NotFoundPage;
