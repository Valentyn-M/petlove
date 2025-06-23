import { JellyTriangle } from 'ldrs/react';
import 'ldrs/react/JellyTriangle.css';
import s from './Loader..module.scss';

// Default values shown

export interface LoaderProps {}

const Loader = ({}: LoaderProps) => {
  return (
    <div className={s.loader}>
      <JellyTriangle size="50" speed="1.4" color="#f6b83d" />
    </div>
  );
};

export default Loader;
