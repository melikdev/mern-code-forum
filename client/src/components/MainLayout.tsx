import { cn } from '@/lib/utils';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
// import Leftbar from './Leftbar';

type MainLayoutProps = {
  className?: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
};

const MainLayout = ({ props, className }: MainLayoutProps) => {
  return (
    <div {...props} className={cn(className, 'max-w-7xl mx-auto')}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
