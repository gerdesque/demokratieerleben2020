import React from 'react';
import { text } from '@storybook/addon-knobs';
import { ChapterComponent } from './chapter';

export default { title: 'Design System/Chapter' };

export const intro = () => <ChapterComponent link="intro" />;
