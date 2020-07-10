import React from 'react';
import { render } from '@testing-library/react';

import { ChapterComponent } from './chapter'; 

describe(' Chapter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChapterComponent link="home" />);
    expect(baseElement).toBeTruthy();
  });
});
