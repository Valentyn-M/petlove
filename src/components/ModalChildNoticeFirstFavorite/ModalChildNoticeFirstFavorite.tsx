import IconPet from '@/components/IconPet/IconPet';
import s from './ModalChildNoticeFirstFavorite.module.scss';
import LinkMain from '@/components/LinkMain/LinkMain';
import clsx from 'clsx';

export interface ModalChildNoticeFirstFavoriteProps {}

const ModalChildNoticeFirstFavorite = ({}: ModalChildNoticeFirstFavoriteProps) => {
  return (
    <div className={s.modalChildNoticeFirstFavorite}>
      <IconPet className={s.iconPet} />
      <h3 className={s.title}>Congrats</h3>
      <p className={s.text}>
        The first fluff in the favorites! May your friendship be the happiest and filled with fun.
      </p>
      <LinkMain to="/profile" lowerCase small className={clsx(s.link, s.linkProfile)}>
        Go to profile
      </LinkMain>
    </div>
  );
};

export default ModalChildNoticeFirstFavorite;
