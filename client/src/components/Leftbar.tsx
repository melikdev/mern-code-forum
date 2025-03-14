import { menuItems } from '@/lib/menuItems';
import { HomeIcon } from 'lucide-react';

const Leftbar = () => {
  return (
    <aside className="fixed flex flex-col">
      <ul className="flex flex-col gap-3 sm:ml-10 md:ml-2">
        {menuItems.map((menuItem) => (
          <button
            key={menuItem.name}
            className="h-10 rounded-md cursor-pointer"
          >
            <li className="text-sm flex items-center lg:justify-start gap-3 p-2">
              <HomeIcon />
              <span className="hidden md:block">{menuItem.name}</span>
            </li>
          </button>
        ))}
      </ul>
    </aside>
  );
};

export default Leftbar;
