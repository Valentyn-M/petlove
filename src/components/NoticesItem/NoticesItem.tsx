import { NoticesItem } from '@/store/types';
import s from './NoticesItem.module.scss';
import { svgIcon } from '@/components/App';
import ButtonMain from '@/components/ButtonMain/ButtonMain';
import ButtonFunction from '@/components/ButtonFunction/ButtonFunction';
import { useModal } from '@/hooks/useModal';
import Modal from '@/components/Modal/Modal';
import ModalChildAttention from '@/components/ModalChildAttention/ModalChildAttention';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  selectAuthUserPetsNoticesFavorites,
  selectIsLoadingCurrentUser,
  selectIsLoggedIn,
} from '@/store/auth/selectors';
import ModalChildNotice from '@/components/ModalChildNotice/ModalChildNotice';
import clsx from 'clsx';
import { addNoticeToFavorites, getCurrentUserInfo, removeNoticeFromFavorites } from '@/store/auth/operations';
import { enqueueSnackbar } from 'notistack';

export interface NoticesItemProps {
  noticeData: NoticesItem;
  variant?: string;
}

const NoticesItem = ({ noticeData, variant = 'default' }: NoticesItemProps) => {
  const { imgURL, title, popularity, name, birthday, sex, species, category, comment, price, _id } = noticeData;

  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isLoadingCurrentUser = useAppSelector(selectIsLoadingCurrentUser);
  const userFavoriteNotices = useAppSelector(selectAuthUserPetsNoticesFavorites);

  const dispatch = useAppDispatch();

  const priceFormatted = typeof price === 'number' ? price.toFixed(2) : '0.00';

  let birthdayFormatted = 'Unknown';
  if (birthday) {
    const [year, month, day] = birthday.split('-');
    birthdayFormatted = `${day}.${month}.${year}`;
  }

  // Favorite Notice
  const isFavorite = userFavoriteNotices.some((favorite) => favorite._id === _id);

  const handleClickFavorite = async (): Promise<void> => {
    if (!isLoggedIn) {
      openModal('attention');
      return;
    }

    try {
      if (!isFavorite) {
        await dispatch(addNoticeToFavorites(_id)).unwrap();
      } else {
        await dispatch(removeNoticeFromFavorites(_id)).unwrap();
      }

      await dispatch(getCurrentUserInfo()).unwrap();
    } catch (error) {
      enqueueSnackbar(`Error: ${error}`, { variant: 'error' });
    }
  };

  // Modals
  const { openModal, closeModal, isModalOpen } = useModal();

  const handleClickLearnMore = (): void => {
    if (!isLoggedIn) {
      openModal('attention');
    } else {
      openModal('notice');
    }
  };

  // Define icon for ButtonFunction
  let iconName = isFavorite ? 'heart' : 'heart-empty';
  if (variant === 'profile') {
    iconName = 'trash';
  }

  return (
    <article className={clsx(s.article, { [s.profile]: variant === 'profile' })}>
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
        <div className={s.datailsItem}>
          <div className={s.datailsTitle}>Category</div>
          <div className={s.datailsValue}>{category}</div>
        </div>
      </div>

      <p className={s.comment}>{comment}</p>

      <p className={s.price}>${priceFormatted}</p>

      <div className={s.footer}>
        <ButtonMain lowerCase={true} className={clsx(s.btn, s.learnMore)} onClick={handleClickLearnMore}>
          Learn more
        </ButtonMain>

        {/* TODO In Profile -> Viewed it must be hidden */}
        <ButtonFunction
          iconName={iconName}
          disabled={isLoadingCurrentUser}
          className={clsx(s.btn, s.favorite)}
          onClick={handleClickFavorite}
        />
      </div>

      {/* Modals */}
      {isModalOpen('attention') && (
        <Modal
          className={s.madalAttention}
          isOpen={true}
          onClose={closeModal}
          contentLabel="Attention"
          padding60To60={true}
        >
          <ModalChildAttention />
        </Modal>
      )}

      {isModalOpen('notice') && (
        <Modal className={s.modalNotice} isOpen={true} onClose={closeModal} contentLabel="Notice" padding40To50>
          <ModalChildNotice noticeId={_id} onClose={closeModal} />
        </Modal>
      )}
    </article>
  );
};

export default NoticesItem;
