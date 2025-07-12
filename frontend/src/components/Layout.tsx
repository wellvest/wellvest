import { ReactNode } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import DisclaimerModal from './DisclaimerModal';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <DisclaimerModal />
    </div>
  );
};

export default Layout;