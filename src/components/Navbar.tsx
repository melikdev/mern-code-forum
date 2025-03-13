import { BellIcon, CircleUserRound, SettingsIcon } from 'lucide-react';
import { Input } from './ui/input';
import '../App.css';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-2 px-4 my-4 border-b-2 sticky top-0 bg-zinc-950 h-16 z-99">
      <section className="flex gap-5 items-center">
        <h1 className="nav-logo">C0D1NG</h1>
      </section>
      <section>
        <Input placeholder="Search" />
      </section>
      <section className="hidden items-center gap-2 sm:flex sm:gap-5">
        <Button className="">
          <SettingsIcon />
        </Button>
        <Button className="">
          <BellIcon />
        </Button>
        <Button className="">
          <CircleUserRound />
        </Button>
      </section>
    </nav>
  );
};

export default Navbar;
