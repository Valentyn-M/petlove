import { FriendsItem, WorkDaysItem } from '@/store/types';
import s from './FriendsItem.module.scss';

export interface FriendsItemProps {
  friendsData: FriendsItem;
}

const FriendsItem = ({ friendsData }: FriendsItemProps) => {
  const { imageUrl, workDays, title, email, address, phone } = friendsData;

  function getWorkingHoursLabel(workDays: WorkDaysItem[] | null): string {
    // If no data or empty array — assume 24/7
    if (!workDays || workDays.length === 0) {
      return 'Day and night';
    }

    // Filter days that are open
    const openDays = workDays.filter((day) => day.isOpen);

    // If none of the days are open — assume 24/7
    if (openDays.length === 0) {
      return 'Day and night';
    }

    // Check if all open days have the same working hours
    const sameHours = openDays.every((day) => day.from === openDays[0].from && day.to === openDays[0].to);

    if (sameHours) {
      // If all 7 days are open with same hours — assume 24/7
      if (openDays.length === 7) {
        return 'Day and night';
      }
      // Same hours but fewer than 7 open days — show specific time
      return `${openDays[0].from} - ${openDays[0].to}`;
    }

    // Different working hours — fallback: use first open day's time
    return `${openDays[0].from} - ${openDays[0].to}`;
  }

  return (
    <article className={s.article}>
      <div className={s.imageWrap}>
        <img className={s.image} src={imageUrl} alt={title} width="90" height="90" loading="lazy" />
      </div>
      <div className={s.houres}>{getWorkingHoursLabel(workDays)}</div>
      <div className={s.body}>
        <h3 className={s.title}>{title}</h3>
        <div className={s.contacts}>
          {email && (
            <p className={s.contact}>
              <span className={s.label}>Email: </span>
              <a href={`mailto:${email}`} className={s.link}>
                {email}
              </a>
            </p>
          )}
          {address && (
            <p className={s.contact}>
              <span className={s.label}>Address: </span>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${address}`}
                target="_blank"
                rel="noopener noreferrer"
                className={s.link}
              >
                {address}
              </a>
            </p>
          )}
          {phone && (
            <p className={s.contact}>
              <span className={s.label}>Phone: </span>
              <a href={`tel:${phone}`} className={s.link}>
                {phone}
              </a>
            </p>
          )}
        </div>
      </div>
    </article>
  );
};

export default FriendsItem;
