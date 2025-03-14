import PopQuestion from './PopQuestion';

const PopularQuestions = () => {
  return (
    <main className="flex flex-col gap-4">
      <h1 className="text-2xl">Popular Questions</h1>
      <PopQuestion />
    </main>
  );
};

export default PopularQuestions;
