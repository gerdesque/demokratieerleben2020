import React from 'react';
import { render } from '@testing-library/react';

import Puzzle from './puzzle';

describe(' Puzzle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Puzzle />);
    expect(baseElement).toBeTruthy();
  });
});
