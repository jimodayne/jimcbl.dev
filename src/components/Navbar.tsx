'use client';

import useScroll from '@/app/hooks/useScroll';
import useScrollPosition from '@/app/hooks/useScrollPosition';

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
    <nav className={'w-full navbar bg-white lg:top-0  lg:pt-6 lg:pb-6 lg:fixed transition duration-300 ' + classScroll}>
      <div className="container mx-auto max-w-screen-xl flex justify-end lg:px-24 ">
        <ul className="flex justify-between font-bold text-lg gap-8">
          <li className="transition duration-300">
            <a href=""> about </a>
          </li>
          <li>
            <a href=""> education </a>
          </li>
          <li className="transition duration-300">
            <a href=""> experience </a>
          </li>
          <li className="transition duration-300">
            <a href=""> projects </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
