import AppBar from '@/components/AppBar/AppBar';
import { useHomePage } from '@/hooks/useHomePage';
import clsx from 'clsx';
import { Suspense } from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isHome = useHomePage();

  return (
    <div className={clsx('wrapper', isHome && 'home')}>
      <header>
        <AppBar />
      </header>
      <main>
        <Suspense fallback={null}>{children}</Suspense>
      </main>
    </div>
  );
};

export default Layout;
