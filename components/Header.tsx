import Link from "next/link";
import { useCallback, useState } from "react";
import { Logo } from "./Logo";

const NavItem = ({
  label,
  href,
  closeMenu,
}: {
  label: string;
  href: string;
  closeMenu?: () => void;
}) => {
  return (
    <li className='contents w-full md:w-auto'>
      <Link href={href}>
        <a
          onClick={closeMenu}
          className='w-full md:w-auto p-4 px-8 md:hover:rounded-lg hover:bg-gray-500 hover:bg-opacity-20 duration-300'>
          {label}
        </a>
      </Link>
    </li>
  );
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = useCallback(() => setIsOpen(false), []);
  return (
    <header className='page-side-padding h-24 z-10 flex items-center bg-white dark:bg-black sticky top-0'>
      <nav className='w-full max-w-4xl mx-auto flex justify-between items-center'>
        <Logo />
        <button
          data-collapse-toggle='mobile-menu'
          type='button'
          className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 duration-300'
          aria-controls='mobile-menu'
          aria-expanded='false'
          onClick={() => setIsOpen(!isOpen)}>
          <span className='sr-only'>Open main menu</span>
          {!isOpen ? (
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'></path>
            </svg>
          ) : (
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'></path>
            </svg>
          )}
        </button>
        <div className='hidden w-full md:w-auto md:block' id='mobile-menu'>
          <ul className='flex flex-grow items-center gap-6 lg:gap-9'>
          <NavItem closeMenu={closeMenu} label='Home' href='/' />
          <NavItem closeMenu={closeMenu} label='Works' href='/#works' />
          <NavItem closeMenu={closeMenu} label='Resume' href='https://drive.google.com' />
          </ul>
        </div>
      </nav>
      <div
        className={(!isOpen ? "hidden" : "") + " md:hidden top-0 bg-inherit w-[calc(100vw_-_theme(width.7)_-_theme(width.20))] h-screen fixed"}
        id='mobile-menu'>
        <ul className='flex flex-grow items-center flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
          <NavItem closeMenu={closeMenu} label='Home' href='/' />
          <NavItem closeMenu={closeMenu} label='Works' href='/#works' />
          <NavItem closeMenu={closeMenu} label='Resume' href='https://drive.google.com' />
        </ul>
      </div>
    </header>
  );
};
