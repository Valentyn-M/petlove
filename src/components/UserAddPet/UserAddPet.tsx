import LinkMain from '@/components/LinkMain/LinkMain';
import s from './UserAddPet.module.scss';
import { svgIcon } from '@/components/App';
import clsx from 'clsx';

export interface UserAddPetProps {}

const UserAddPet = ({}: UserAddPetProps) => {
  return (
    <div className={s.userAddPet}>
      <h3 className={s.title}>My pets</h3>
      <LinkMain to="/add-pet" lowerCase small className={clsx(s.link, s.linkAdd)}>
        <span>Add pet</span>
        <svg className={s.iconAdd}>
          <use href={`${svgIcon}#icon-plus`} />
        </svg>
      </LinkMain>
    </div>
  );
};

export default UserAddPet;
