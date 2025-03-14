import { Badge } from './ui/badge';
import { MessageSquareMoreIcon, ThumbsUpIcon, User2Icon } from 'lucide-react';
import { Link } from 'react-router';
import { format } from 'timeago.js';

type questionProps = {
  _id: string;
  slug: string;
  question: string;
  code: string;
  tag: string;
  likes: number;
  comments: number;
  date: string;
  userImageUrl: string | typeof User2Icon;
  createdAt: string;
};

const Question = ({ q }: { q: questionProps }) => {
  return (
    <main className="p-4 w-full bg-zinc-900 rounded-xl">
      <Link
        to={`/question/${q.slug}`}
        key={q._id}
        className="flex flex-col gap-4"
      >
        <section className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <img
              alt="avatar"
              height="30px"
              width="30px"
              className="rounded-full"
              // @ts-expect-error - TODO: fix this
              src={q.userImageUrl || <User2Icon className="w-5 h-5" />}
            />
            <span>melik</span>
          </div>
          <div className="text-zinc-500 text-xs">{format(q.createdAt)}</div>
        </section>
        <section className="flex flex-col gap-3">
          {q.question.length > 300 ? (
            <span>{q.question.slice(0, 300) + '...'}</span>
          ) : (
            <span>{q.question}</span>
          )}
        </section>
        <section className="flex flex-col gap-3">
          {q.question.length > 300 ? (
            <span>{q.code.slice(0, 300) + '...'}</span>
          ) : (
            <span>{q.code}</span>
          )}
        </section>
        <section className="flex gap-2 cursor-pointer">
          <Badge key={q.tag}>{q.tag}</Badge>
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
    </main>
  );
};

export default Question;
