import clsx from 'clsx';
import s from './MyNoticesFavoritePets.module.scss';
import { useAppSelector } from '@/store/hooks';
import { selectAuthUserPetsNoticesFavorites } from '@/store/auth/selectors';
import NoticesItem from '@/components/NoticesItem/NoticesItem';

export interface MyNoticesFavoritePetsProps {}

const MyNoticesFavoritePets = ({}: MyNoticesFavoritePetsProps) => {
  const favoritePets = useAppSelector(selectAuthUserPetsNoticesFavorites);

  return (
    <div className={s.myNoticesFavoritePets}>
      {favoritePets.length > 0 ? (
        <ul className={s.list}>
          {favoritePets.map((favoritePet) => (
            <li key={favoritePet._id} className={s.item}>
              <NoticesItem noticeData={favoritePet} />
            </li>
          ))}
        </ul>
      ) : (
        <div className={s.text}>
          <p>
            Oops, <span className={clsx('brand-color', s.brandColor)}>looks like there aren't any furries</span> on your
            adorable page yet. Do not worry! View your pets on the "Find pet" page and add them to your favorites.
          </p>
        </div>
      )}
    </div>
  );
};

export default MyNoticesFavoritePets;
