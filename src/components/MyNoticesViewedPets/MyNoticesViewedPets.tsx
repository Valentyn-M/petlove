import clsx from 'clsx';
import s from './MyNoticesViewedPets.module.scss';
import NoticesItem from '@/components/NoticesItem/NoticesItem';
import { useAppSelector } from '@/store/hooks';
import { selectAuthUserPetsNoticesViewed } from '@/store/auth/selectors';

export interface MyNoticesViewedPetsProps {}

const MyNoticesViewedPets = ({}: MyNoticesViewedPetsProps) => {
  const viewedNotices = useAppSelector(selectAuthUserPetsNoticesViewed);

  return (
    <div className={s.myNoticesViewedPets}>
      {viewedNotices.length > 0 ? (
        <ul className={s.list}>
          {viewedNotices.map((viewedNotice) => (
            <li key={viewedNotice._id} className={s.item}>
              <NoticesItem noticeData={viewedNotice} variant="profile" isBtnFunc={false} />
            </li>
          ))}
        </ul>
      ) : (
        <div className={s.text}>
          <p>
            Oops, <span className={clsx('brand-color', s.brandColor)}>looks like there aren't any furries</span> on your
            viewed page yet. Do not worry! Start exploring pets on the "Find pet" page — your recently viewed pets will
            appear here.
          </p>
        </div>
      )}
    </div>
  );
};

export default MyNoticesViewedPets;
