import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CategoryCard from '../../components/category/CategoryCard';

it('should render a category card', () => {
  render(
    <MemoryRouter>
      <CategoryCard category="Beef" image="https://www.themealdb.com/images/category/beef.png" />
    </MemoryRouter>,
  );
  expect(screen.getByAltText('Beef')).toBeInstanceOf(Image);
});
