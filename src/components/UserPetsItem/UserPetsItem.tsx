import { Pet } from '@/store/types';
import s from './UserPetsItem.module.scss';
import ButtonFunction from '@/components/ButtonFunction/ButtonFunction';
import { useAppDispatch } from '@/store/hooks';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';
import { removePetFromUserPets } from '@/store/auth/operations';

export interface UserPetsItemProps {
  userPetData: Pet;
}

const UserPetsItem = ({ userPetData }: UserPetsItemProps) => {
  const { imgURL, title, name, birthday, sex, species, _id } = userPetData;

  const dispatch = useAppDispatch();

  const [isDeleting, setIsDeleting] = useState(false);

  let birthdayFormatted = 'Unknown';
  if (birthday) {
    const [year, month, day] = birthday.split('-');
    birthdayFormatted = `${day}.${month}.${year}`;
  }

  const handleClick = async (): Promise<void> => {
    setIsDeleting(true);
    try {
      await dispatch(removePetFromUserPets(_id)).unwrap();
    } catch (error) {
      enqueueSnackbar(`Error: ${error}`, { variant: 'error' });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <li className={s.userPetsItem}>
      <div className={s.imgBlock}>
        <img className={s.img} src={imgURL} alt={title} width="90" height="90" />
      </div>

      <div className={s.infoBlock}>
        <h4 className={s.title}>{title}</h4>

        <div className={s.datails}>
          <div className={s.datailsItem}>
            <div className={s.datailsTitle}>Name</div>
            <div className={s.datailsValue}>{name}</div>
          </div>
          <div className={s.datailsItem}>
            <div className={s.datailsTitle}>Birthday</div>
            <div className={s.datailsValue}>{birthdayFormatted}</div>
          </div>
          <div className={s.datailsItem}>
            <div className={s.datailsTitle}>Sex</div>
            <div className={s.datailsValue}>{sex}</div>
          </div>
          <div className={s.datailsItem}>
            <div className={s.datailsTitle}>Species</div>
            <div className={s.datailsValue}>{species}</div>
          </div>
        </div>
      </div>

      <ButtonFunction className={s.btn} small iconName="trash" onClick={handleClick} disabled={isDeleting} />
    </li>
  );
};

export default UserPetsItem;
