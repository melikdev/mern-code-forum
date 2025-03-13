import PopQuestion from './PopQuestion';

const Rightbar = () => {
  return (
    <aside className="fixed h-screen flex flex-col gap-4 p-5">
      <h1 className="text-xl">Popular Questions</h1>
      <PopQuestion />
    </aside>
  );
};

export default Rightbar;
