'use client';

import useScroll from '@/hooks/useScroll';
import useScrollPosition from '@/hooks/useScrollPosition';
import LightDarkButton from './LightDarkButton';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const scroll = useScroll();
  const scrollPos = useScrollPosition();

  let classScroll = '';

  if (scrollPos < 86) {
    classScroll = 'translate-y-0';
  } else {
    if (scroll === 'down') {
      classScroll = '-translate-y-full down';
    } else {
      classScroll = 'translate-y-0 up';
    }
  }

  return (
    <nav
      className={
        'w-full navbar bg-slate-50 dark:bg-slate-900 dark:text-slate-300 lg:top-0  lg:pt-6 lg:pb-6 lg:fixed lg:transition lg:duration-200 ' +
        classScroll
      }
    >
      <div className="container mx-auto max-w-screen-xl justify-end items-center lg:px-24 hidden lg:flex">
        <ul className="flex justify-between font-bold text-lg gap-8">
          <li className="transition duration-300">
            <a href=""> about </a>
          </li>
          <li className="transition duration-300">
            <a href=""> education </a>
          </li>
          <li className="transition duration-300">
            <a href=""> experience </a>
          </li>
          <li className="transition duration-300">
            <a href=""> projects </a>
          </li>
        </ul>
        <LightDarkButton />
      </div>
      <div className="pt-4 flex lg:hidden items-center justify-end">
        {/* <FaBars size={24} /> */}
        <LightDarkButton />
      </div>
    </nav>
  );
};

export default Navbar;
