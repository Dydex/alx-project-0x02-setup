import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <li className='hover:underline'>
          <Link href='/about'>About</Link>
        </li>

        <li className='hover:underline'>
          <Link href='/home'>Home</Link>
        </li>

        <li className='hover:underline'>
          <Link href='/posts'>Posts</Link>
        </li>
      </nav>
      <h6>This is the header</h6>
    </header>
  );
};

export default Header;
