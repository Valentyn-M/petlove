import s from './Nav.module.scss';
import LinkNav from '@/components/LinkNav/LinkNav';

export interface NavProps {}

const Nav = ({}: NavProps) => {
  return (
    <nav>
      <ul className={s.navList}>
        <li>
          <LinkNav to="/news">News</LinkNav>
        </li>
        <li>
          <LinkNav to="/find-pet">Find pet</LinkNav>
        </li>
        <li>
          <LinkNav to="/our-friends">Our friends</LinkNav>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
