import { FC } from 'react';

const Layout: FC<any> = ({ children }) => (
  <div className="min-h-screen  text-white">
    <main>{children}</main>
  </div>
);

export default Layout;
