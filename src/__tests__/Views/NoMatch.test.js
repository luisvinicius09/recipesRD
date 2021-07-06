import React from 'react';
import { render, screen } from '@testing-library/react';

import NoMatch from '../../views/NoMatch';

it('should display a no match warning', () => {
  render(<NoMatch />);
  expect(screen.getByTestId('no_match_warning')).toContainHTML();
});
