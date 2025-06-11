import s from './PetBlockInfo.module.scss';

export interface PetBlockInfoProps {
  imageIcon1x: string;
  imageIcon2x: string;
  petName: string;
  petBirthday: string;
  petAbout: string;
}

const PetBlockInfo = ({ imageIcon1x, imageIcon2x, petName, petBirthday, petAbout }: PetBlockInfoProps) => {
  return (
    <div className={s.petBlockInfo}>
      <div className={s.imgBlock}>
        <img
          src={imageIcon1x}
          srcSet={`${imageIcon1x} 1x, ${imageIcon2x} 2x`}
          alt="Pet icon"
          width="32"
          height="32"
          loading="lazy"
        />
      </div>
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
