import s from './Login.module.scss';
import imageMobile1x from '../../assets/images/login/image_mobile.png';
import imageMobile2x from '../../assets/images/login/image_mobile@2x.png';
import imageTablet1x from '../../assets/images/login/image_tablet.png';
import imageTablet2x from '../../assets/images/login/image_tablet@2x.png';
import imagePc1x from '../../assets/images/login/image_pc.png';
import imagePc2x from '../../assets/images/login/image_pc@2x.png';
import imageIcon1x from '../../assets/images/login/icon.png';
import PetBlock from '@/components/PetBlock/PetBlock';
import LoginForm from '@/components/LoginForm/LoginForm';

export interface LoginProps {}

const Login = ({}: LoginProps) => {
  return (
    <section className={s.login}>
      <PetBlock
        imageMobile1x={imageMobile1x}
        imageMobile2x={imageMobile2x}
        imageTablet1x={imageTablet1x}
        imageTablet2x={imageTablet2x}
        imagePc1x={imagePc1x}
        imagePc2x={imagePc2x}
        imgAlt={'Dog'}
        imgWidth="335"
        imgHeight="280"
        petName={'Rich'}
        petBirthday={'21.09.2020'}
        petAbout={
          'Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!'
        }
        petType={'dog'}
      />
      <LoginForm />
    </section>
  );
};

export default Login;
