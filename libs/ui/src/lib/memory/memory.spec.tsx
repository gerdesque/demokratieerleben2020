import React from 'react';
import { render } from '@testing-library/react';

import Memory from './memory';

describe(' Memory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Memory />);
    expect(baseElement).toBeTruthy();
  });
});
