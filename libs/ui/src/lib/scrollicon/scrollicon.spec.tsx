import React from 'react';
import { render } from '@testing-library/react';

import Scrollicon from './scrollicon';

describe(' Scrollicon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Scrollicon />);
    expect(baseElement).toBeTruthy();
  });
});
