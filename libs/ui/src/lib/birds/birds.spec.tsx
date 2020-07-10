import React from 'react';
import { render } from '@testing-library/react';

import Birds from './birds';

describe(' Birds', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Birds />);
    expect(baseElement).toBeTruthy();
  });
});
