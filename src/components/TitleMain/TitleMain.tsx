import s from './TitleMain.module.scss';

export interface TitleMainProps {
  value: string;
}

const TitleMain = ({ value }: TitleMainProps) => {
  return <h1 className={s.title}>{value}</h1>;
};

export default TitleMain;
