import IconPet from '@/components/IconPet/IconPet';
import s from './ModalChildAttention.module.scss';
import LinkMain from '@/components/LinkMain/LinkMain';

export interface ModalChildAttentionProps {}

const ModalChildAttention = ({}: ModalChildAttentionProps) => {
  return (
    <div className={s.modalChildAttention}>
      <IconPet className={s.iconPet} petType="dog" />
      <h3 className={s.title}>Attention</h3>
      <div className={s.text}>
        <p>
          We would like to remind you that certain functionality is available only to authorized users.If you have an
          account, please log in with your credentials. If you do not already have an account, you must register to
          access these features.
        </p>
      </div>
      <div className={s.links}>
        <LinkMain to="/login" lowerCase={true} small className={s.link}>
          Log In
        </LinkMain>
        <LinkMain to="/registration" light={true} lowerCase={true} small className={s.link}>
          Registration
        </LinkMain>
      </div>
    </div>
  );
};

export default ModalChildAttention;
