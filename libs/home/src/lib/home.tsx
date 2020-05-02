import React from 'react';
import { Chapter, Title } from '@gerdesque/ui'
import './home.scss';

/* eslint-disable-next-line */
export interface HomeProps {}

const introText =
  "Es ist 1927. Irgendwo im Ruhrgebiet leben zwei Kinder: Anna und Karl. Die Eltern der beiden gehören zur großen Arbeiterschaft, die im Bergbau, in Webereien, Fabriken und Stahlwerken arbeiten.";

export const Home = (props: HomeProps) => {
  return (
    <Chapter class="intro">
      <Title text={["Demokratie ", <i>er</i>,"leben"]} />
      <div className='box'>
        <p>{introText}</p>
      </div>
    </Chapter>
  );
};

export default Home;
