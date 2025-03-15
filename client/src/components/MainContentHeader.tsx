import { PlusIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router';

const MainContentHeader = () => {
  return (
    <main className="w-full p-5 dark:bg-zinc-950 bg-white border-b-2 sticky top-15 ">
      <section className="flex justify-between">
        <h1 className="text-2xl">All questions</h1>
        <Button variant="secondary" asChild>
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
