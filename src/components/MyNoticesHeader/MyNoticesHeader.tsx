import ButtonMain from '@/components/ButtonMain/ButtonMain';
import s from './MyNoticesHeader.module.scss';
import clsx from 'clsx';

export interface MyNoticesHeaderProps {
  activateFavoritePets(): void;
  activateViewedPets(): void;
  isFavoriteActive: boolean;
  isViewedActive: boolean;
}

const MyNoticesHeader = ({
  activateFavoritePets,
  activateViewedPets,
  isFavoriteActive,
  isViewedActive,
}: MyNoticesHeaderProps) => {
  return (
    <div className={s.myNoticesHeader}>
      <ButtonMain
        className={clsx(s.btn, s.switcher)}
        lowerCase
        small
        inactive={!isFavoriteActive}
        onClick={() => activateFavoritePets()}
      >
        My favorite pets
      </ButtonMain>
      <ButtonMain
        className={clsx(s.btn, s.switcher)}
        lowerCase
        small
        inactive={!isViewedActive}
        onClick={() => activateViewedPets()}
      >
        Viewed
      </ButtonMain>
    </div>
  );
};

export default MyNoticesHeader;
