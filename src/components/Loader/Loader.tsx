import { JellyTriangle } from 'ldrs/react';
import 'ldrs/react/JellyTriangle.css';
import s from './Loader..module.scss';
import clsx from 'clsx';

// Default values shown

export interface LoaderProps {
  className?: string;
}

const Loader = ({ className }: LoaderProps) => {
  return (
    <div className={clsx(s.loader, className)}>
      <JellyTriangle size="50" speed="1.4" color="#f6b83d" />
    </div>
  );
};

export default Loader;
