import AppBar from '@/components/AppBar/AppBar';
import { Suspense } from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        <AppBar />
      </header>
      <main>
        <Suspense fallback={null}>{children}</Suspense>
      </main>
    </>
  );
};

export default Layout;
