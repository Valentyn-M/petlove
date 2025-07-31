import clsx from 'clsx';
import s from './MyNoticesViewedPets.module.scss';

export interface MyNoticesViewedPetsProps {}

const MyNoticesViewedPets = ({}: MyNoticesViewedPetsProps) => {
  return (
    <div className={s.ьyNoticesViewedPets}>
      <div className={s.text}>
        <p>
          Oops, <span className={clsx('brand-color', s.brandColor)}>looks like there aren't any furries</span> on your
          viewed page yet. Do not worry! Start exploring pets on the "Find pet" page — your recently viewed pets will
          appear here.
        </p>
      </div>
    </div>
  );
};

export default MyNoticesViewedPets;
