import { svgIcon } from '@/components/App';
import { SVGProps } from 'react';

export interface SvgCalendarIconProps {
  props?: SVGProps<SVGSVGElement>;
}

const SvgCalendarIcon = ({ props }: SvgCalendarIconProps) => {
  return (
    <svg {...props} width="20" height="20" fill="currentColor">
      <use href={`${svgIcon}#icon-calendar`} />
    </svg>
  );
};

export default SvgCalendarIcon;
