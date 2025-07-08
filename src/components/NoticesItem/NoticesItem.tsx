import { NoticesItem } from '@/store/types';
import s from './NoticesItem.module.scss';
import { svgIcon } from '@/components/App';

export interface NoticesItemProps {
  newsData: NoticesItem;
}

const NoticesItem = ({ newsData }: NoticesItemProps) => {
  const { imgURL, title, popularity } = newsData;

  return (
    <article className={s.article}>
      <div className={s.imageWrap}>
        <img className={s.image} src={imgURL} alt={title} width="315" height="178" loading="lazy" />
      </div>
      <div className={s.header}>
        <h3 className={s.title}>{title}</h3>
        <div className={s.popularity}>
          <svg className={s.popularityIcon}>
            <use href={`${svgIcon}#icon-star`} />
          </svg>
          <span className={s.popularityValue}>{popularity}</span>
        </div>
      </div>
    </article>
  );
};

export default NoticesItem;
