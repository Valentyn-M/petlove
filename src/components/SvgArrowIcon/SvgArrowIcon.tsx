import { svgIcon } from '@/components/App';

interface SvgArrowIconProps extends React.SVGProps<SVGSVGElement> {}

const SvgArrowIcon: React.FC<SvgArrowIconProps> = (props) => {
  return (
    <svg {...props} width="18" height="18">
      <use href={`${svgIcon}#icon-chevron`} />
    </svg>
  );
};

export default SvgArrowIcon;
