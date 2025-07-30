import s from './UserPetsBlock.module.scss';
import UserAddPet from '@/components/UserAddPet/UserAddPet';
import UserPetsList from '@/components/UserPetsList/UserPetsList';

export interface UserPetsBlockProps {}

const UserPetsBlock = ({}: UserPetsBlockProps) => {
  return (
    <div className={s.userPetsBlock}>
      <UserAddPet />
      <UserPetsList />
    </div>
  );
};

export default UserPetsBlock;
