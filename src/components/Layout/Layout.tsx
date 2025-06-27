import AppBar from '@/components/AppBar/AppBar';
import { useHomePage } from '@/hooks/useHomePage';
import clsx from 'clsx';
import { Suspense } from 'react';
import s from './Layout.module.scss';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isHome = useHomePage();

  return (
    <div className={clsx(s.wrapper, isHome && s.home)}>
      <div className={s.container}>
        <header className={clsx(s.header, isHome && s.home)}>
          <AppBar />
        </header>
        <main>
          <Suspense fallback={null}>{children}</Suspense>
        </main>
      </div>
    </div>
  );
};

export default Layout;
