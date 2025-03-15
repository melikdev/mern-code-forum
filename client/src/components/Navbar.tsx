import { Input } from './ui/input';
import '../App.css';
import { Link } from 'react-router';
import { SignedIn, UserButton } from '@clerk/clerk-react';
import { ModeToggle } from './ToggleThemeButton';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-2 px-4 my-4 border-b-2 sticky top-0 dark:bg-zinc-950 bg-white h-16 z-99">
      <section className="flex gap-5 items-center">
        <Link to="/">
          <h1 className="nav-logo">C0D1NG</h1>
        </Link>
      </section>
      <section>
        <Input placeholder="Search" />
      </section>
      <section className="hidden items-center gap-2 sm:flex sm:gap-5">
        <div className="">
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <ModeToggle />
      </section>
    </nav>
  );
};

export default Navbar;
