import PetBlockInfo from '@/components/PetBlockInfo/PetBlockInfo';
import s from './PetBlock.module.scss';
import { breakpoints } from '@/styles/breakpoints';

export interface PetBlockProps {
  imageMobile1x: string;
  imageMobile2x: string;
  imageTablet1x: string;
  imageTablet2x: string;
  imagePc1x: string;
  imagePc2x: string;
  imgAlt: string;
  imgWidth: string;
  imgHeight: string;
  imageIcon1x: string;
  imageIcon2x: string;
  petName: string;
  petBirthday: string;
  petAbout: string;
}

const PetBlock = ({
  imageMobile1x,
  imageMobile2x,
  imageTablet1x,
  imageTablet2x,
  imagePc1x,
  imagePc2x,
  imgAlt,
  imgWidth,
  imgHeight,
  imageIcon1x,
  imageIcon2x,
  petName,
  petBirthday,
  petAbout,
}: PetBlockProps) => {
  return (
    <div className={s.petBlock}>
      <picture>
        <source srcSet={`${imagePc1x} 1x, ${imagePc2x} 2x`} media={`(min-width: ${breakpoints.tabletAfter})`} />
        <source
          srcSet={`${imageTablet1x} 1x, ${imageTablet2x} 2x`}
          media={`(min-width: ${breakpoints.mobileMediumAfter})`}
        />
        <source
          srcSet={`${imageMobile1x} 1x, ${imageMobile2x} 2x`}
          media={`(max-width: ${breakpoints.mobileMedium})`}
        />
        <img className={s.image} src={imageMobile1x} alt={imgAlt} width={imgWidth} height={imgHeight} loading="lazy" />
      </picture>
      <PetBlockInfo
        imageIcon1x={imageIcon1x}
        imageIcon2x={imageIcon2x}
        petName={petName}
        petBirthday={petBirthday}
        petAbout={petAbout}
      />
    </div>
  );
};

export default PetBlock;
