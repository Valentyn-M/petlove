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
  petName: string;
  petBirthday: string;
  petAbout: string;
  petType: string;
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
  petName,
  petBirthday,
  petAbout,
  petType,
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
      <PetBlockInfo petName={petName} petBirthday={petBirthday} petAbout={petAbout} petType={petType} />
    </div>
  );
};

export default PetBlock;
