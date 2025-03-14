import { useInfiniteQuery } from '@tanstack/react-query';
import MainContentHeader from './MainContentHeader';
import Question from './Question';
import axios from 'axios';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import InfiniteScroll from 'react-infinite-scroll-component';

const MainContent = () => {
  const fetchQuestions = async (pageParam: number) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
      params: { page: pageParam },
    });
    return res.data;
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    // isFetchingNextPage,
    // status,
  } = useInfiniteQuery({
    queryKey: ['questions'],
    queryFn: ({ pageParam = 1 }) => fetchQuestions(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
  });

  const allQuestions = data?.pages.flatMap((page) => page.posts) || [];

  if (error) {
    return toast(`Something went wrong! ${error.message}`);
  }

  return (
    <main>
      <MainContentHeader />
      <InfiniteScroll
        className="flex flex-col gap-2 justify-center items-center"
        dataLength={allQuestions.length}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={<Loader2 className="animate-spin" />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>You've seen it all folks!</b>
          </p>
        }
      >
        {isFetching && <Loader2 className="animate-spin" />}
        {allQuestions.map((question) => (
          <Question key={question._id} q={question} />
        ))}
      </InfiniteScroll>
    </main>
  );
};

export default MainContent;
