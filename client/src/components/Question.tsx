import { question } from '@/lib/question';
import { Badge } from './ui/badge';
import { MessageSquareMoreIcon, ThumbsUpIcon } from 'lucide-react';
import { Link } from 'react-router';

const Question = () => {
  return (
    <main className="p-4 w-full bg-zinc-900 rounded-xl">
      {question.map((q) => {
        return (
          <Link
            to={`/question/${q.id}`}
            key={q.id}
            className="flex flex-col gap-4"
          >
            <section className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <img
                  alt="avatar"
                  height="30px"
                  width="30px"
                  src={q.profilePicture}
                />{' '}
                {q.username}
              </div>
              <div className="text-zinc-500 text-xs">{q.date}</div>
            </section>
            <section className="flex flex-col gap-3">
              {q.question.length > 300 ? (
                <span>{q.question.slice(0, 300) + '...'}</span>
              ) : (
                <span>{q.question}</span>
              )}
            </section>
            <section className="flex gap-2 cursor-pointer">
              {q.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </section>
            <section className="flex gap-5 items-center">
              <button className="flex gap-2 items-center">
                <ThumbsUpIcon size={20} />
                <span className="text-s">{q.likes}</span>
              </button>
              <div className="flex gap-2 items-center">
                <MessageSquareMoreIcon size={20} />
                <span className="text-s">{q.comments}</span>
              </div>
            </section>
          </Link>
        );
      })}
    </main>
  );
};

export default Question;
