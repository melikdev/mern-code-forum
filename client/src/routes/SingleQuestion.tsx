import Comments from '@/components/Comments';
import { Badge } from '@/components/ui/badge';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router';
import { format } from 'timeago.js';

const fetchQuestion = async (slug: string | undefined) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
  return res.data;
};

const Question = () => {
  const { id: slug } = useParams();

  const {
    isPending,
    error,
    data: q,
  } = useQuery({
    queryKey: ['question', slug],
    queryFn: () => fetchQuestion(slug),
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!q) {
    return <div>No data found</div>;
  }

  return (
    <main className="flex flex-col gap-5 p-5">
      <div className="flex flex-col gap-4 dark:bg-zinc-900 border-2 mt-5 rounded-xl px-4 py-2 w-full">
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
      </div>
      <div className="flex flex-col gap-5 max-w-xl">
        <h1 className="text-3xl">Comments</h1>
        <Comments postId={q._id} />
      </div>
    </main>
  );
};

export default Question;
