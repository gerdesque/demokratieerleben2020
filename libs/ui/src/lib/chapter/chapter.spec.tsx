import React from 'react';
import { render } from '@testing-library/react';

import Chapter from './chapter';

describe(' Chapter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Chapter />);
    expect(baseElement).toBeTruthy();
  });
});
