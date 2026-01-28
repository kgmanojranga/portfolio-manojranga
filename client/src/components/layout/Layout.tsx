import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar.tsx';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
