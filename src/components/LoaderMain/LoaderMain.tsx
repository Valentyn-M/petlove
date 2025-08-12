import { useEffect, useState } from 'react';
import s from './LoaderMain.module.scss';
import { svgIcon } from '@/components/App';

export interface LoaderMainProps {
  loaderDuration: number;
}

const LoaderMain = ({ loaderDuration }: LoaderMainProps) => {
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);

  // Animation
  useEffect(() => {
    let start: number | null = null;
    let animationFrameId: number;
    const progressDuration = loaderDuration - 200;

    const animate = (timestamp: number) => {
      start ??= timestamp;
      const elapsed = timestamp - start;
      const percentage = Math.min((elapsed / progressDuration) * 100, 100);

      setProgress(percentage);

      if (percentage < 100) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setShowLogo(true);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [loaderDuration]);

  return (
    <div className={s.loader}>
      {showLogo ? (
        <div className={s.logo}>
          <span>petl</span>
          <svg
            className={s.iconHeart}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="82"
            height="82"
            viewBox="0 0 32 32"
            fill="#f6b83d"
          >
            <path d="M15.991 7.561c-2.559-3.022-6.827-3.834-10.033-1.068s-3.658 7.393-1.14 10.665c1.613 2.096 5.743 5.983 8.505 8.506 0.918 0.839 1.376 1.258 1.926 1.426 0.473 0.145 1.012 0.145 1.485 0 0.55-0.168 1.008-0.588 1.926-1.426 2.761-2.524 6.892-6.41 8.505-8.506 2.518-3.272 2.122-7.928-1.14-10.665s-7.474-1.954-10.033 1.068z"></path>
          </svg>

          <span>ve</span>
        </div>
      ) : (
        <div className={s.indicator}>
          <svg
            className={s.ellipse}
            width="398"
            height="398"
            viewBox="0 0 398 398"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M1.66876 182.741C-1.75311 224.271 8.01509 265.822 29.5824 301.478C51.1498 337.133 83.4167 365.075 121.789 381.325C160.161 397.575 202.681 401.304 243.296 391.981C283.911 382.659 320.549 360.76 347.993 329.403C375.438 298.046 392.29 258.83 396.149 217.338C400.008 175.846 390.679 134.194 369.488 98.3135C348.298 62.4327 316.327 34.1522 278.129 17.4988C239.93 0.845467 197.451 -3.33165 156.74 5.56227"
              stroke="url(#paint0_linear_55732_5890)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_55732_5890"
                x1="182.741"
                y1="396.331"
                x2="-15"
                y2="199"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className={s.percent}>{Math.round(progress)}%</div>
        </div>
      )}
    </div>
  );
};

export default LoaderMain;
