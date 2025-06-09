import { useHomePage } from '@/hooks/useHomePage';
import s from './Menu.module.scss';
import LinkMenu from '@/components/LinkMenu/LinkMenu';

export interface MenuProps {}

const Menu = ({}: MenuProps) => {
  const isHome = useHomePage();

  return (
    <nav>
      <ul className={s.navList}>
        <li>
          <LinkMenu to="/news" outline={isHome}>
            News
          </LinkMenu>
        </li>
        <li>
          <LinkMenu to="/find-pet" outline={isHome}>
            Find pet
          </LinkMenu>
        </li>
        <li>
          <LinkMenu to="/our-friends" outline={isHome}>
            Our friends
          </LinkMenu>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
