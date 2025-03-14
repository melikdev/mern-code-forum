import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useAuth, useUser } from '@clerk/clerk-react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

const NewQuestion = () => {
  const { getToken } = useAuth();
  const navigate = useNavigate();

  const { user } = useUser();
  const userImageUrl = user?.imageUrl;

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: (res) => {
      toast('Question has been submitted successfully!');
      navigate(`/question/${res.data.slug}`);
    },
    onError: (err) => {
      toast(`Something went wrong! ${err.message}`);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      userImageUrl: formData.get('userImageUrl'),
      question: formData.get('question'),
      code: formData.get('code'),
      language: formData.get('language'),
      tag: formData.get('language'),
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    mutation.mutate(data);
  };

  return (
    <main className="flex flex-col max-w-md mt-10 gap-5 p-5">
      <h1 className="text-3xl">Ask a question!</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <label>Question</label>
        <textarea
          className="p-5 border-1 border-zinc-500 rounded-md"
          placeholder="How to use React hooks?"
          rows={4}
          cols={50}
          name="question"
        />
        <label>Language</label>
        <Select name="language">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="javascript">Javascript</SelectItem>
            <SelectItem value="typescript">Typescript</SelectItem>
            <SelectItem value="python">React</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="vue">Vue</SelectItem>
            <SelectItem value="angular">Angular</SelectItem>
          </SelectContent>
        </Select>
        <label>Code</label>
        <textarea
          className="p-5 border-1 border-zinc-500 rounded-md"
          placeholder="console.log('hello world')"
          rows={4}
          cols={50}
          name="code"
        />
        <Button
          disabled={mutation.isPending}
          type="submit"
          className="disabled:bg-zinc-600"
        >
          {mutation.isPending ? <Loader2 className="animate-spin" /> : 'Submit'}
        </Button>
        {mutation.isError && (
          <p className="text-red-500">{mutation.error.message}</p>
        )}
        <input type="hidden" name="userImageUrl" value={userImageUrl} />
      </form>
    </main>
  );
};

export default NewQuestion;
