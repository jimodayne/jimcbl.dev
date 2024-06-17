import { garamond } from '@/app/font';

const Navbar = () => {
  return (
    <nav className="flex justify-end w-full">
      <ul className="flex justify-between font-bold text-lg gap-10">
        <li className="transition duration-300 hover:opacity-60">
          <a href=""> about </a>
        </li>
        {/* <li>
          <a href=""> education </a>
        </li> */}
        <li className="transition duration-300 hover:opacity-60">
          <a href=""> experience </a>
        </li>
        <li className="transition duration-300 hover:opacity-60">
          <a href=""> projects </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
