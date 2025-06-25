import { NewsItem } from '@/store/types';
import s from './NewsItem.module.scss';
import { Link } from 'react-router-dom';

export interface NewsItemProps {
  newsData: NewsItem;
}

const NewsItem = ({ newsData }: NewsItemProps) => {
  const { imgUrl, title, text, date, url } = newsData;

  const rawDate = date;
  const newDate = new Date(rawDate);
  const formattedDate = newDate.toLocaleDateString('en-GB');

  return (
    <article className={s.article}>
      <div className={s.imageWrap}>
        <img className={s.image} src={imgUrl} alt={title} width="361" height="226" loading="lazy" />
      </div>
      <h3 className={s.title}>{title}</h3>
      <p className={s.text}>{text}</p>
      <div className={s.footer}>
        <time className={s.date} dateTime={date}>
          {formattedDate}
        </time>
        <a className={s.link} href={url} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </article>
  );
};

export default NewsItem;
