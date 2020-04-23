import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './chapter.scss';

/* eslint-disable-next-line */
export interface ChapterProps {}

export const ChapterLink = (props: ChapterProps) => {
  const [chapter, setChapter] = useState<ChapterProps[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/chapter')
      .then(_ => _.json())
      .then(setChapter);
  }, []);

  return (
    <>
      {chapter.map(c => (
        <li className={'chapter'}>
          <Link to={c.path}>{c.name}</Link>
        </li>
      ))}
    </>
  );
};
