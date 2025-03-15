import { menuItems } from '@/lib/menuItems';
import { Link, useParams } from 'react-router';

const Leftbar = () => {
  const params = useParams();

  console.log(params.id);

  return (
    <aside className="fixed flex flex-col">
      <ul className="flex flex-col gap-3 sm:ml-10 md:ml-2 ">
        {menuItems.map((menuItem) => (
          <Link
            to={menuItem.href}
            key={menuItem.name}
            className={`h-10 rounded-md cursor-pointer ${
              params.id === menuItem.href ? 'bg-zinc-500 text-white' : ''
            }`}
          >
            <li className="text-sm flex items-center lg:justify-start gap-3 p-2">
              {menuItem.icon}
              <span className="hidden md:block">{menuItem.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
};

export default Leftbar;
