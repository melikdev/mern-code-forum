import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import SingleComment from './SingleComment';
import { useAuth } from '@clerk/clerk-react';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';

const fetchComments = async (postId: string | undefined) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/comments/${postId}`
  );
  return res.data;
};

const Comments = ({ postId }: { postId: string | undefined }) => {
  const { getToken } = useAuth();

  const { data } = useQuery({
    queryKey: ['comments', postId],
    queryFn: () => fetchComments(postId),
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newComment) => {
      const token = await getToken();
      return axios.post(
        `${import.meta.env.VITE_API_URL}/comments/${postId}`,
        newComment,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', postId] });
    },
    onError: (error) => {
      toast(`Something went wrong! ${error.message}`);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      desc: formData.get('desc'),
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    mutation.mutate(data);
  };

  return (
    <main className="flex flex-col gap-5">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <textarea
          className="p-5 border-1 border-zinc-500 rounded-md"
          placeholder="How to use React hooks?"
          rows={4}
          cols={50}
          name="desc"
        />

        <Button size="sm" type="submit">
          {mutation.isPending ? (
            <Loader2 className="animate-spin" />
          ) : (
            'Comment'
          )}
        </Button>
      </form>
      <div className="flex flex-col gap-5">
        {/* @ts-expect-error - TODO: fix this */}
        {data?.map((comment) => (
          <SingleComment key={comment._id} comment={comment} />
        ))}
      </div>
    </main>
  );
};

export default Comments;
