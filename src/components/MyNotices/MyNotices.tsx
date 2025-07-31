import MyNoticesHeader from '@/components/MyNoticesHeader/MyNoticesHeader';
import s from './MyNotices.module.scss';
import MyNoticesFavoritePets from '@/components/MyNoticesFavoritePets/MyNoticesFavoritePets';
import MyNoticesViewedPets from '@/components/MyNoticesViewedPets/MyNoticesViewedPets';
import { useState } from 'react';

export interface MyNoticesProps {}

const MyNotices = ({}: MyNoticesProps) => {
  const [isFavoriteActive, setIsFavoriteActive] = useState<boolean>(true);
  const [isViewedActive, setIsViewedActive] = useState<boolean>(false);

  const activateFavorite = (): void => {
    setIsFavoriteActive(true);
    setIsViewedActive(false);
  };

  const activateViewed = (): void => {
    setIsViewedActive(true);
    setIsFavoriteActive(false);
  };

  return (
    <div className={s.myNotices}>
      <MyNoticesHeader
        activateFavoritePets={activateFavorite}
        isFavoriteActive={isFavoriteActive}
        activateViewedPets={activateViewed}
        isViewedActive={isViewedActive}
      />
      {isFavoriteActive && <MyNoticesFavoritePets />}
      {isViewedActive && <MyNoticesViewedPets />}
    </div>
  );
};

export default MyNotices;
