import s from './NewsList.module.scss';
import { useAppSelector } from '@/store/hooks';
import { selectNewsItems } from '@/store/news/selectors';
import NewsItem from '@/components/NewsItem/NewsItem';

export interface NewsListProps {}

const NewsList = ({}: NewsListProps) => {
  const newsItems = useAppSelector(selectNewsItems);

  return (
    newsItems.length > 1 && (
      <ul className={s.list}>
        {newsItems.map((newsItem) => (
          <li key={newsItem._id} className={s.item}>
            <NewsItem newsData={newsItem} />
          </li>
        ))}
      </ul>
    )
  );
};

export default NewsList;
