import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';

/* eslint-disable-next-line */
export interface NavProps {
  chapters: any[];
}

export const Nav = (props: NavProps) => {

  const renderChapterNav = () => {
    return props.chapters.map((chapter, index) => <li className='navigation--item' key={index}>
        <NavLink to = {`/chapter/${chapter.link}`}>
          <p>{chapter.name}</p>
        </NavLink>
      </li> )
}

  return (
    <nav className="app-nav">
      <ul className='navigation'>
        <li className='navigation--item'>
          <NavLink exact to="/">Demokratie erLeben</NavLink>
        </li>
        {renderChapterNav()}
    </ul>
  </nav>
  );
};

export default Nav;
