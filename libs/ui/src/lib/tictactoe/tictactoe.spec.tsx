import React from 'react';
import { render } from '@testing-library/react';

import Tictactoe from './tictactoe';

describe(' Tictactoe', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tictactoe />);
    expect(baseElement).toBeTruthy();
  });
});
