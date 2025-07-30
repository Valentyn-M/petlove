import UserBlockBody from '@/components/UserBlockBody/UserBlockBody';
import UserBlockHeader from '@/components/UserBlockHeader/UserBlockHeader';
import s from './UserBlock.module.scss';

export interface UserBlockProps {}

const UserBlock = ({}: UserBlockProps) => {
  return (
    <div className={s.userBlock}>
      <UserBlockHeader />
      <UserBlockBody />
    </div>
  );
};

export default UserBlock;
