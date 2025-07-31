import ButtonMain from '@/components/ButtonMain/ButtonMain';
import s from './MyNoticesHeader.module.scss';

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
      <ButtonMain lowerCase inactive={!isFavoriteActive} onClick={() => activateFavoritePets()}>
        My favorite pets
      </ButtonMain>
      <ButtonMain lowerCase inactive={!isViewedActive} onClick={() => activateViewedPets()}>
        Viewed
      </ButtonMain>
    </div>
  );
};

export default MyNoticesHeader;
