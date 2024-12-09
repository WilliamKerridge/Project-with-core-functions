import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../../contexts/AuthContext';

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-md border-0 py-1.5 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <button className="rounded-full bg-gray-100 p-2 text-gray-500 hover:text-gray-700">
            <BellIcon className="h-6 w-6" />
          </button>

          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
              <UserCircleIcon className="h-6 w-6" />
              <span>{user?.username}</span>
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`
                        block w-full px-4 py-2 text-left text-sm
                        ${active ? 'bg-gray-100' : ''}
                      `}
                      onClick={() => {/* TODO: Implement profile */}}
                    >
                      Your Profile
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`
                        block w-full px-4 py-2 text-left text-sm
                        ${active ? 'bg-gray-100' : ''}
                      `}
                      onClick={logout}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </header>
  );
}