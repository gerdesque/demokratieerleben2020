import React from 'react';
import { render } from '@testing-library/react';

import Decission from './decission';

describe(' Decission', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Decission />);
    expect(baseElement).toBeTruthy();
  });
});
