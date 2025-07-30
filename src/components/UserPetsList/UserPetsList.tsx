import { useAppSelector } from '@/store/hooks';
import s from './UserPetsList.module.scss';
import { selectAuthUserPetsItems } from '@/store/auth/selectors';
import UserPetsItem from '@/components/UserPetsItem/UserPetsItem';

export interface UserPetsListProps {}

const UserPetsList = ({}: UserPetsListProps) => {
  const userPetsItems = useAppSelector(selectAuthUserPetsItems);
  console.log(userPetsItems);

  return (
    userPetsItems &&
    userPetsItems.length > 1 && (
      <ul className={s.userPetsList}>
        {userPetsItems.map((userPet) => (
          <li key={userPet._id} className={s.item}>
            <UserPetsItem />
          </li>
        ))}
      </ul>
    )
  );
};

export default UserPetsList;
