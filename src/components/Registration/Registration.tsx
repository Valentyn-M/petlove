import s from './Registration.module.scss';
import imageMobile1x from '../../assets/images/registration/image_mobile.png';
import imageMobile2x from '../../assets/images/registration/image_mobile@2x.png';
import imageTablet1x from '../../assets/images/registration/image_tablet.png';
import imageTablet2x from '../../assets/images/registration/image_tablet@2x.png';
import imagePc1x from '../../assets/images/registration/image_pc.png';
import imagePc2x from '../../assets/images/registration/image_pc@2x.png';
import imageIcon1x from '../../assets/images/registration/icon.png';
import imageIcon2x from '../../assets/images/registration/icon@2x.png';
import RegistrationForm from '@/components/RegistrationForm/RegistrationForm';
import PetBlock from '@/components/PetBlock/PetBlock';

export interface RegistrationProps {}

const Registration = ({}: RegistrationProps) => {
  return (
    <section className={s.registration}>
      <PetBlock
        imageMobile1x={imageMobile1x}
        imageMobile2x={imageMobile2x}
        imageTablet1x={imageTablet1x}
        imageTablet2x={imageTablet2x}
        imagePc1x={imagePc1x}
        imagePc2x={imagePc2x}
        imgAlt={'Cat'}
        imgWidth="334"
        imgHeight="280"
        imageIcon1x={imageIcon1x}
        imageIcon2x={imageIcon2x}
        petName={'Jack'}
        petBirthday={'18.10.2021'}
        petAbout={
          'Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys.'
        }
      />
      <RegistrationForm />
    </section>
  );
};

export default Registration;
