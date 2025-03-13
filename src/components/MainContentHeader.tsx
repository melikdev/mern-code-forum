import { PlusIcon } from 'lucide-react';
import { Button } from './ui/button';

const MainContentHeader = () => {
  return (
    <main className="w-full p-5 sticky top-15 bg-zinc-950 z-98">
      <section className="flex justify-between">
        <h1 className="text-2xl">All questions</h1>
        <Button>
          <PlusIcon />
          Ask a Question
        </Button>
      </section>
    </main>
  );
};

export default MainContentHeader;
