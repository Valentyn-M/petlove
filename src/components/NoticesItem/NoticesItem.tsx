import { NoticesItem } from '@/store/types';
import s from './NoticesItem.module.scss';
import { svgIcon } from '@/components/App';
import ButtonMain from '@/components/ButtonMain/ButtonMain';
import ButtonFunction from '@/components/ButtonFunction/ButtonFunction';

export interface NoticesItemProps {
  newsData: NoticesItem;
}

const NoticesItem = ({ newsData }: NoticesItemProps) => {
  const { imgURL, title, popularity, name, birthday, sex, species, category, comment, price } = newsData;

  const priceFormatted = typeof price === 'number' ? price.toFixed(2) : '0.00';

  let birthdayFormatted = 'Unknown';
  if (birthday) {
    const [year, month, day] = birthday.split('-');
    birthdayFormatted = `${day}.${month}.${year}`;
  }
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

      <div className={s.datails}>
        <div className={s.datailsItem}>
          <span className={s.datailsTitle}>Name</span>
          <span className={s.datailsValue}>{name}</span>
        </div>
        <div className={s.datailsItem}>
          <span className={s.datailsTitle}>Birthday</span>
          <span className={s.datailsValue}>{birthdayFormatted}</span>
        </div>
        <div className={s.datailsItem}>
          <span className={s.datailsTitle}>Sex</span>
          <span className={s.datailsValue}>{sex}</span>
        </div>
        <div className={s.datailsItem}>
          <span className={s.datailsTitle}>Species</span>
          <span className={s.datailsValue}>{species}</span>
        </div>
        <div className={s.datailsItem}>
          <span className={s.datailsTitle}>Category</span>
          <span className={s.datailsValue}>{category}</span>
        </div>
      </div>

      <p className={s.comment}>{comment}</p>

      <p className={s.price}>${priceFormatted}</p>

      <div className={s.footer}>
        <ButtonMain lowerСase={true} className={s.learnMore}>
          Learn more
        </ButtonMain>
        <ButtonFunction iconName="heart-empty" />
      </div>
    </article>
  );
};

export default NoticesItem;
