import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from './ui/button';
import axios from 'axios';
import { toast } from 'sonner';
import { useAuth } from '@clerk/clerk-react';

const AddComment = ({ queryKey }) => {
  const { getToken } = useAuth();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newComment) => {
      const token = await getToken();
      return axios.post(
        `${import.meta.env.VITE_API_URL}/comments`,
        newComment,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
      toast('Comment has been submitted successfully!');
    },
    onError: (err) => {
      toast(`Something went wrong! ${err.message}`);
    },
  });

  return (
    <main>
      <form className="flex flex-col gap-3">
        <textarea
          className="p-5 border-1 border-zinc-500 rounded-md"
          placeholder="How to use React hooks?"
          rows={4}
          cols={50}
          name="question"
        />
        <Button size="sm" type="submit">
          Comment
        </Button>
      </form>
    </main>
  );
};

export default AddComment;
