import { useAppSelector } from '@/store/hooks';
import s from './UserPetsList.module.scss';
import { selectAuthUserPetsItems } from '@/store/auth/selectors';
import UserPetsItem from '@/components/UserPetsItem/UserPetsItem';

export interface UserPetsListProps {}

const UserPetsList = ({}: UserPetsListProps) => {
  const userPetsItems = useAppSelector(selectAuthUserPetsItems);

  return (
    userPetsItems.length > 1 && (
      <ul className={s.userPetsList}>
        {userPetsItems.map((userPet) => (
          <UserPetsItem key={userPet._id} userPetData={userPet} />
        ))}
      </ul>
    )
  );
};

export default UserPetsList;
