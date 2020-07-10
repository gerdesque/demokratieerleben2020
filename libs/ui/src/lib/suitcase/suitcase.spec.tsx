import React from 'react';
import { render } from '@testing-library/react';

import Suitcase from './suitcase';

describe(' Suitcase', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Suitcase />);
    expect(baseElement).toBeTruthy();
  });
});
