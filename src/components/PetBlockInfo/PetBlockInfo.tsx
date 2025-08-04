import IconPet from '@/components/IconPet/IconPet';
import s from './PetBlockInfo.module.scss';

export interface PetBlockInfoProps {
  petName?: string;
  petBirthday?: string;
  petAbout?: string;
  petType?: string;
}

const PetBlockInfo = ({
  petName = 'Cat',
  petBirthday = '01.01.2025',
  petAbout = 'Pet description',
  petType = 'cat',
}: PetBlockInfoProps) => {
  return (
    <div className={s.petBlockInfo}>
      <IconPet small={true} petType={petType} />
      <div className={s.textBlock}>
        <div className={s.header}>
          <h6 className={s.name}>{petName}</h6>
          <div className={s.birthday}>
            <span>Birthday: </span>
            {petBirthday}
          </div>
        </div>
        <p className={s.body}>{petAbout}</p>
      </div>
    </div>
  );
};

export default PetBlockInfo;
