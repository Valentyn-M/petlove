import { useAppDispatch, useAppSelector } from '@/store/hooks';
import s from './ModalChildNotice.module.scss';
import { selectNoticesDetailsItem } from '@/store/noticeDetails/selectors';
import { useEffect } from 'react';
import { fetchNotice } from '@/store/noticeDetails/operations';
import Loader from '@/components/Loader/Loader';
import { resetNoticeDetails } from '@/store/noticeDetails/slice';
import { useSnackbar } from 'notistack';
import { svgIcon } from '@/components/App';
import clsx from 'clsx';
import ButtonMain from '@/components/ButtonMain/ButtonMain';
import LinkMain from '@/components/LinkMain/LinkMain';

export interface ModalChildNoticeProps {
  noticeId: string;
  onClose: () => void;
}

const ModalChildNotice = ({ noticeId, onClose }: ModalChildNoticeProps) => {
  const noticeDetails = useAppSelector(selectNoticesDetailsItem);

  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    dispatch(fetchNotice(noticeId))
      .unwrap()
      .catch((error) => {
        enqueueSnackbar(`Error: ${error}`, { variant: 'error' });
        onClose();
      });

    return () => {
      dispatch(resetNoticeDetails());
    };
  }, [dispatch, noticeId, enqueueSnackbar, onClose]);

  // Wait for noticeDetails
  if (!noticeDetails) return <Loader />;

  // Notice details
  const { imgURL, category, title, popularity, name, birthday, sex, species, comment, price } = noticeDetails;

  function getStarsCount(popularity: number): number {
    if (popularity >= 1000) return 5;
    if (popularity >= 500) return 4;
    if (popularity >= 100) return 3;
    if (popularity >= 10) return 2;
    if (popularity >= 1) return 1;
    return 0;
  }

  let birthdayFormatted = 'Unknown';
  if (birthday) {
    const [year, month, day] = birthday.split('-');
    birthdayFormatted = `${day}.${month}.${year}`;
  }

  const priceFormatted = typeof price === 'number' ? price.toFixed(2) : '0.00';

  return (
    <div className={s.modalChildNoticeProps}>
      <div className={s.header}>
        <div className={s.category}>{category}</div>
        <img className={s.image} src={imgURL} alt={title} width="150" height="150" />
      </div>

      <h3 className={s.title}>{title}</h3>

      <div className={s.popularity}>
        <div className={s.popularityStars}>
          {[...Array(5)].map((_, i) => (
            <svg key={i} className={clsx(s.iconStar, i < getStarsCount(popularity) && s.filled)}>
              <use href={`${svgIcon}#icon-star`} />
            </svg>
          ))}
        </div>
        <div className={s.popularityValue}>{popularity}</div>
      </div>

      <div className={s.datails}>
        <div className={s.datailsItem}>
          <div className={s.datailsTitle}>Name</div>
          <div className={s.datailsValue}>{name}</div>
        </div>
        <div className={s.datailsItem}>
          <div className={s.datailsTitle}>Birthday</div>
          <div className={s.datailsValue}>{birthdayFormatted}</div>
        </div>
        <div className={s.datailsItem}>
          <div className={s.datailsTitle}>Sex</div>
          <div className={s.datailsValue}>{sex}</div>
        </div>
        <div className={s.datailsItem}>
          <div className={s.datailsTitle}>Species</div>
          <div className={s.datailsValue}>{species}</div>
        </div>
      </div>

      <p className={s.comment}>{comment}</p>

      <p className={s.price}>${priceFormatted}</p>

      <div className={s.footer}>
        {/* TODO add handleClick */}
        <ButtonMain lowerCase className={s.btn}>
          <span>Add to</span>
          <svg className={s.iconHeart}>
            <use href={`${svgIcon}#icon-heart-empty`} />
          </svg>
        </ButtonMain>

        <LinkMain href="mailto:mail@petlove.com" lowerCase light className={s.btn}>
          Contact
        </LinkMain>
      </div>
    </div>
  );
};

export default ModalChildNotice;
