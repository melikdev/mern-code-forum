import Collectives from './Collectives';
import PopularQuestions from './PopularQuestions';

const Rightbar = () => {
  return (
    <aside className="fixed h-screen flex flex-col gap-5 p-2">
      <PopularQuestions />
      <Collectives />
    </aside>
  );
};

export default Rightbar;
