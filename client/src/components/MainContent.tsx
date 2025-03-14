import MainContentHeader from './MainContentHeader';
import Question from './Question';

const MainContent = () => {
  return (
    <main className="">
      <MainContentHeader />
      <div className="p-5 flex flex-col gap-3">
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
    </main>
  );
};

export default MainContent;
