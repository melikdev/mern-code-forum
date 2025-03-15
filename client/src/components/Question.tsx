import { Badge } from './ui/badge';
import {
  MessageSquareMoreIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  User2Icon,
} from 'lucide-react';
import { Link } from 'react-router';
import { format } from 'timeago.js';
import { Button } from './ui/button';
import { toast } from 'sonner';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { questionTypes } from '@/types/questionTypes';

const Question = ({ q }: { q: questionTypes }) => {
  const [alreadyLiked, setAlreadyLiked] = useState(false);

  const mutation = useMutation({
    mutationFn: async () => {
      return axios.post(`${import.meta.env.VITE_API_URL}/posts/like`, {
        id: q._id,
      });
    },
    onSuccess: () => {
      toast('Question has been liked successfully!');
    },
    onError: (err) => {
      toast(`Something went wrong! ${err.message}`);
    },
  });

  const handleLike = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    q.likeCount++;
    mutation.mutate();
  };

  return (
    <main className="px-4 py-2 w-full dark:bg-zinc-900 border-2 mt-5 rounded-xl">
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
            <span>{q.user.username}</span>
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
      </Link>
      <section className="flex gap-5 items-center z-99 mt-5">
        <form onSubmit={handleLike}>
          <Button
            type="submit"
            className="flex gap-2 items-center cursor-pointer"
            onClick={() => setAlreadyLiked(true)}
          >
            {alreadyLiked ? <ThumbsDownIcon /> : <ThumbsUpIcon />}
            <span className="text-s">{q.likeCount}</span>
          </Button>
        </form>
        <button className="flex gap-2 items-center">
          <MessageSquareMoreIcon size={20} />
          <span className="text-s">{q.commentCount}</span>
        </button>
      </section>
    </main>
  );
};

export default Question;
