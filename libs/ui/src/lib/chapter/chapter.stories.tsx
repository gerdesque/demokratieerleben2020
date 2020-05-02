import React from 'react';
import { text } from "@storybook/addon-knobs";
import { Chapter } from './chapter';
import Title from '../title/title';

export default { title: 'Design System/Chapter' };

const introText =
  "Es ist 1927. Irgendwo im Ruhrgebiet leben zwei Kinder: Anna und Karl. Die Eltern der beiden gehören zur großen Arbeiterschaft, die im Bergbau, in Webereien, Fabriken und Stahlwerken arbeiten.";

export const intro = () => (
  <Chapter class="intro">
    <Title text={["Demokratie ", <i>er</i>,"leben"]} />
    <div className='box'>
      <p>{introText}</p>
    </div>
  </Chapter>
);
