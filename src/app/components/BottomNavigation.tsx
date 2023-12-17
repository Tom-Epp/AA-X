'use client';
import Link from 'next/link';
import { PageRoutes } from '../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faChartSimple, faHeadset } from '@fortawesome/free-solid-svg-icons';

export default function BottomNavigation() {
  const icons = [faHeart, faChartSimple, faHeadset];
  return (
    <nav className="min-w-screen min-h-10 fixed bottom-0 flex w-full items-center justify-items-center rounded-t-lg bg-white p-5 text-black shadow-lg shadow-blue-600 drop-shadow">
      {Object.values(PageRoutes).map((route, index) => {
        const slug = `/${
          route !== 'Dashboard' ? route.trim().replace(' ', '-').toLocaleLowerCase() : ''
        }`;

        return (
          <div className="mx-auto flex" key={route}>
            <Link href={slug} className="flex-auto">
              <div className="mx-auto flex flex-col items-center justify-center px-4 py-2 text-center">
                <FontAwesomeIcon
                  icon={icons[index]}
                  style={{ color: '#000000' }}
                  data-testid="navigation-icon"
                />
                <p>{route}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </nav>
  );
}
