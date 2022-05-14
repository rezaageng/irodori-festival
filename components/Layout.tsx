import { FC } from 'react';
import Navbar from './Navbar';

const Layout: FC<any> = ({ children }) => (
  <div className="min-h-screen  text-white">
    <Navbar />
    <div className="max-w-7xl p-4 xl:m-auto">
      <main>{children}</main>
    </div>
  </div>
);

export default Layout;
