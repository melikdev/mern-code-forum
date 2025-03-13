import { cn } from '@/lib/utils';
import Navbar from './Navbar';
import Leftbar from './Leftbar';
import Rightbar from './Rightbar';
import MainContent from './MainContent';

type MainLayoutProps = {
  children: React.ReactNode;
  className?: string;
  props?: React.HTMLAttributes<HTMLDivElement>;
};

const MainLayout = ({ children, props, className }: MainLayoutProps) => {
  return (
    <div {...props} className={cn(className, 'max-w-7xl mx-auto')}>
      <Navbar />
      {children}
      <div className="p-2">
        <section className="flex">
          <div className="hidden h-screen sm:block min-w-[20%]">
            <Leftbar />
          </div>
          <div className="sm:w-[80%] lg:w-[50%]">
            <MainContent />
          </div>
          <div className="hidden h-screen lg:block w-[30%]">
            <Rightbar />
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainLayout;
