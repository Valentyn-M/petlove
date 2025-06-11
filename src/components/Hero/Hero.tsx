import s from './Hero.module.scss';
import imageMobile1x from '../../assets/images/hero/image_mobile.jpg';
import imageMobile2x from '../../assets/images/hero/image_mobile@2x.jpg';
import imageTablet1x from '../../assets/images/hero/image_tablet.jpg';
import imageTablet2x from '../../assets/images/hero/image_tablet@2x.jpg';
import imagePc1x from '../../assets/images/hero/image_pc.jpg';
import imagePc2x from '../../assets/images/hero/image_pc@2x.jpg';
import { breakpoints } from '@/styles/breakpoints';

export interface HeroProps {}

const Hero = ({}: HeroProps) => {
  return (
    <section className={s.hero}>
      <div className={s.textBlock}>
        <h1 className={s.title}>
          Take good <span>care</span> of your small pets
        </h1>
        <div className={s.text}>
          <p>
            Choosing a pet for your home is a choice that is meant to enrich your life with immeasurable joy and
            tenderness.
          </p>
        </div>
      </div>

      <div className={s.imgBlock}>
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
          <img src={imageMobile1x} alt="Woman with a dog" width="335" height="402" loading="lazy" />
        </picture>
      </div>
    </section>
  );
};

export default Hero;
