import { PlusIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router';

const MainContentHeader = () => {
  return (
    <main className="w-full p-5 sticky top-15 bg-zinc-950 z-98">
      <section className="flex justify-between">
        <h1 className="text-2xl">All questions</h1>
        <Button asChild>
          <Link to="/question/new">
            <PlusIcon />
            Ask a Question
          </Link>
        </Button>
      </section>
    </main>
  );
};

export default MainContentHeader;
