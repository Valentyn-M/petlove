import s from './IconPet.module.scss';
import catIcon1x from '../../assets/images/pet-icons/cat.png';
import catIcon2x from '../../assets/images/pet-icons/cat@2x.png';
import dogIcon1x from '../../assets/images/pet-icons/dog.png';
import dogIcon2x from '../../assets/images/pet-icons/dog@2x.png';
import clsx from 'clsx';

export interface IconPetProps {
  petType?: string;
  small?: boolean;
  className?: string;
}

const icons = {
  cat: {
    '1x': catIcon1x,
    '2x': catIcon2x,
  },
  dog: {
    '1x': dogIcon1x,
    '2x': dogIcon2x,
  },
} as const;

const IconPet = ({ petType = 'cat', small, className }: IconPetProps) => {
  const icon = icons[petType as keyof typeof icons] || icons['cat'];

  return (
    <div className={clsx(s.iconPet, small && s.small, className)}>
      <img
        className={s.iconImg}
        src={icon['1x']}
        srcSet={`${icon['1x']} 1x, ${icon['2x']} 2x`}
        alt={`${petType} icon`}
        width="44"
        height="44"
        loading="lazy"
      />
    </div>
  );
};

export default IconPet;
