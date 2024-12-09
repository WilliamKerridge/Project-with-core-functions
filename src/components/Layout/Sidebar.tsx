import { useNavigate, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  DocumentDuplicateIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  ChartBarIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'RMAs', href: '/rmas', icon: DocumentDuplicateIcon },
  { name: 'Service Orders', href: '/service-orders', icon: WrenchScrewdriverIcon },
  { name: 'Contacts', href: '/contacts', icon: UserGroupIcon },
  { name: 'Reports', href: '/reports', icon: ChartBarIcon },
  { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex h-full w-64 flex-col bg-gray-900">
      <div className="flex h-16 items-center px-4">
        <h1 className="text-xl font-bold text-white">RMA Manager</h1>
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <button
              key={item.name}
              onClick={() => navigate(item.href)}
              className={`
                group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium
                ${isActive
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }
              `}
            >
              <item.icon
                className={`
                  mr-3 h-6 w-6 flex-shrink-0
                  ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}
                `}
                aria-hidden="true"
              />
              {item.name}
            </button>
          );
        })}
      </nav>
    </div>
  );
}