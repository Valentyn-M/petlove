import { NoticesItem } from '@/store/types';
import s from './NoticesItem.module.scss';
import { svgIcon } from '@/components/App';
import ButtonMain from '@/components/ButtonMain/ButtonMain';
import ButtonFunction from '@/components/ButtonFunction/ButtonFunction';
import { useModal } from '@/hooks/useModal';
import Modal from '@/components/Modal/Modal';
import ModalChildAttention from '@/components/ModalChildAttention/ModalChildAttention';
import { useAppSelector } from '@/store/hooks';
import { selectIsLoggedIn } from '@/store/auth/selectors';
import ModalChildNotice from '@/components/ModalChildNotice/ModalChildNotice';

export interface NoticesItemProps {
  newsData: NoticesItem;
}

const NoticesItem = ({ newsData }: NoticesItemProps) => {
  const { imgURL, title, popularity, name, birthday, sex, species, category, comment, price, _id } = newsData;

  const priceFormatted = typeof price === 'number' ? price.toFixed(2) : '0.00';

  let birthdayFormatted = 'Unknown';
  if (birthday) {
    const [year, month, day] = birthday.split('-');
    birthdayFormatted = `${day}.${month}.${year}`;
  }

  // Modals
  const { openModal, closeModal, isModalOpen } = useModal();

  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const handleClickLearnMore = (): void => {
    if (!isLoggedIn) {
      openModal('attention');
    } else {
      openModal('notice');
    }
  };

  const handleClickFavorite = (): void => {
    if (!isLoggedIn) {
      openModal('attention');
    } else {
      console.log(
        'відправляє запит на backend для додавання або видалення оголошення зі списку улюблених оголошень, після чого  іконка-сердечко за допомогою стилізації відмальовує поточний актуальний стан оголошення.'
      );
    }
  };

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
        <ButtonMain lowerCase={true} className={s.learnMore} onClick={handleClickLearnMore}>
          Learn more
        </ButtonMain>

        <ButtonFunction iconName="heart-empty" onClick={handleClickFavorite} />
      </div>

      {/* Modals */}
      {isModalOpen('attention') && (
        <Modal isOpen={true} onClose={closeModal} contentLabel="Attention" padding60To60={true}>
          <ModalChildAttention />
        </Modal>
      )}

      {isModalOpen('notice') && (
        <Modal isOpen={true} onClose={closeModal} contentLabel="Notice" padding40To72={true}>
          <ModalChildNotice noticeId={_id} onClose={closeModal} />
        </Modal>
      )}
    </article>
  );
};

export default NoticesItem;
