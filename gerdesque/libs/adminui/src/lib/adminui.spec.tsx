import React from 'react';
import { render } from '@testing-library/react';

import Adminui from './adminui';

describe(' Adminui', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Adminui />);
    expect(baseElement).toBeTruthy();
  });
});
