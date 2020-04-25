import React from 'react';
import { render } from '@testing-library/react';

import Title from './title';

describe(' Title', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Title text="title" />);
    expect(baseElement).toBeTruthy();
  });
});
