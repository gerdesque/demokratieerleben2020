import React from 'react';
import { render } from '@testing-library/react';

import Smokingpit from './smokingpit';

describe(' Smokingpit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Smokingpit />);
    expect(baseElement).toBeTruthy();
  });
});
