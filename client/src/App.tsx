import Leftbar from './components/Leftbar';
import MainContent from './components/MainContent';
import Rightbar from './components/Rightbar';

export default function App() {
  return (
    <div className="p-2">
      <section className="flex">
        <div className="hidden h-screen sm:block min-w-[20%]">
          <Leftbar />
        </div>
        <div className="w-full sm:w-[100%] md:w-[50%]">
          <MainContent />
        </div>
        <div className="hidden md:block md:w-[30%]">
          <Rightbar />
        </div>
      </section>
    </div>
  );
}
