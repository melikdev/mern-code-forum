import { format } from 'timeago.js';

type commentProps = {
  user: {
    username: string;
    imageUrl: string;
  };
  desc: string;
  createdAt: string;
};

const SingleComment = ({ comment }: { comment: commentProps }) => {
  return (
    <main className="flex flex-col px-4 py-2 w-full dark:bg-zinc-900 border-2 rounded-xl gap-2">
      <span>{comment.user.username}</span>
      <span>{comment.desc}</span>
      <span className="text-xs text-zinc-500">{format(comment.createdAt)}</span>
    </main>
  );
};

export default SingleComment;
