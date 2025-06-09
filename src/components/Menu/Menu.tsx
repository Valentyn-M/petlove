import { useHomePage } from '@/hooks/useHomePage';
import s from './Menu.module.scss';
import LinkMenu from '@/components/LinkMenu/LinkMenu';

export interface MenuProps {
  isMenuMobileActive?: boolean;
}

const Menu = ({ isMenuMobileActive }: MenuProps) => {
  const isHome = useHomePage();

  const isOutlineType = isMenuMobileActive ? !isHome : isHome;

  return (
    <nav className={s.menu}>
      <ul className={s.list}>
        <li className={s.item}>
          <LinkMenu to="/news" outline={isOutlineType}>
            News
          </LinkMenu>
        </li>
        <li className={s.item}>
          <LinkMenu to="/find-pet" outline={isOutlineType}>
            Find pet
          </LinkMenu>
        </li>
        <li className={s.item}>
          <LinkMenu to="/our-friends" outline={isOutlineType}>
            Our friends
          </LinkMenu>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
