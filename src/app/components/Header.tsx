'use client';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const pathname = usePathname();
  return (
    <div className="shadow-black-600 min-w-screen min-h-1/3 sticky top-0 flex h-16 w-full flex-row  items-end justify-center rounded-b-lg bg-white pb-3 text-sm font-bold text-black shadow-lg drop-shadow">
      <div className="absolute basis-3/4 text-center">
        <p className="self-center">{pathname === '/' ? 'Dashboard' : pathname.replace('/', '')}</p>
      </div>
      <div className="right-0 flex basis-3/4 flex-row justify-end space-x-5">
        {[faBell, faUser].map((icon, index) => (
          <FontAwesomeIcon
            icon={icon}
            style={{ color: '#000000' }}
            key={index}
            data-testid="header-icon"
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
