import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';

/* eslint-disable-next-line */
export interface NavProps {
  path: string;
}

export const Nav = (props: NavProps) => {
  const [chapter, setChapter] = useState<NavProps[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/chapter')
      .then(_ => _.json())
      .then(setChapter);
  }, []);

  return (
    <nav className="app-nav">
      <ul className='navigation'>
        <li className='navigation--item'>
          <NavLink exact to={props.path} />
        </li>
        <li className='navigation--item'>
          <NavLink exact to="/adminui" />
        </li>
        {chapter.map((c, index) => (
          <li className='navigation--item' key={index}>
            <NavLink exact to={c.path} />
          </li>
        ))}
    </ul>
  </nav>
  );
};

export default Nav;
