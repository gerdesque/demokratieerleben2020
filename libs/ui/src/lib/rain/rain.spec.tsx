import React from 'react';
import { render } from '@testing-library/react';

import Rain from './rain';

describe(' Rain', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Rain />);
    expect(baseElement).toBeTruthy();
  });
});
