import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Input from '../../components/category/CategoryCard';

it('should render a category card', () => {
  render(
    <MemoryRouter>
      <Input ingredient="Beef" />
    </MemoryRouter>,
  );
  expect(screen.getByText('Beef'));
});
