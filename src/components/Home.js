import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../state/actions';
import CategoryCard from './category/CategoryCard';
import NavBar from './utils/NavBar';
import SearchBar from './search/SearchBar';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const renderCategories = () => {
    if (state.loading) {
      return <h2>Loading...</h2>;
    }
    return state.data.items.map((cat) => <CategoryCard key={cat.strCategory} category={cat.strCategory} image={cat.strCategoryThumb} amount='1' />);
  }

  return (
    <>
      <NavBar />
      <SearchBar />
      { renderCategories() }
    </>
  );
};

export default Home;
