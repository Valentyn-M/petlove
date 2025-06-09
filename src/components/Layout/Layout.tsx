import AppBar from '@/components/AppBar/AppBar';
import { Suspense } from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="wrapper">
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
