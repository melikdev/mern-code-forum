import { collective } from '@/lib/collective';
import { Button } from './ui/button';

const SingleCollective = () => {
  return (
    <main className="flex flex-col gap-4">
      {collective.map((c) => {
        return (
          <div key={c.id} className="flex justify-between items-center w-full">
            <section className="flex items-center gap-2">
              <div>
                <img alt="avatar" height="40px" width="40px" src={c.logo} />
              </div>
              <div>
                <h2 className="text-md">{c.name}</h2>
                <p className="text-xs text-zinc-500">{c.members} members</p>
              </div>
            </section>
            <section>
              <Button>Join</Button>
            </section>
          </div>
        );
      })}
    </main>
  );
};

export default SingleCollective;
