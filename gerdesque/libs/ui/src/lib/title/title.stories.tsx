import React from 'react';
import { text } from "@storybook/addon-knobs";
import { Title } from './title';

export default { title: 'Title' };

export const intro = () => (
  <Title text={["Demokratie ", <i>er</i>,"leben"]} />
);

export const specialChars = () => (
  <Title text={text("Text", "äöüÄÖÜß")} />
);