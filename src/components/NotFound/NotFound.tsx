import LinkMain from '@/components/LinkMain/LinkMain';
import s from './NotFound.module.scss';
import imageMobile1x from '../../assets/images/not-found/image_mobile.png';
import imageMobile2x from '../../assets/images/not-found/image_mobile@2x.png';
import imagePc1x from '../../assets/images/not-found/image_pc.png';
import imagePc2x from '../../assets/images/not-found/image_pc@2x.png';
import { breakpoints } from '@/styles/breakpoints';
import clsx from 'clsx';

export interface NotFoundProps {}

const NotFound = ({}: NotFoundProps) => {
  return (
    <section className={s.notFound}>
      <h1 className="visually-hidden">Page Not Found</h1>
      <div className={s.mainBlock}>
        <span className={s.number}>4</span>
        <div className={s.imgWrap}>
          <picture>
            <source
              srcSet={`${imagePc1x} 1x, ${imagePc2x} 2x`}
              media={`(min-width: ${breakpoints.mobileMediumAfter})`}
            />
            <source
              srcSet={`${imageMobile1x} 1x, ${imageMobile2x} 2x`}
              media={`(max-width: ${breakpoints.mobileMedium})`}
            />
            <img className={s.image} src={imageMobile1x} alt="pet" width="280" height="280" />
          </picture>
        </div>
        <span className={s.number}>4</span>
      </div>

      <p className={s.text}>Ooops! This page not found :(</p>

      <LinkMain to="/" light lowerCase small className={clsx(s.link, s.linkHome)}>
        To home page
      </LinkMain>
    </section>
  );
};

export default NotFound;
