import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchFilterOptions } from '../state/actions';
import CategoryCard from '../components/category/CategoryCard';
import NavBar from '../components/utils/NavBar';
import SearchBar from '../components/search/SearchBar';
import Filter from '../components/filter/Filter';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchFilterOptions());
  }, [dispatch]);

  const renderCategories = () => {
    if (state.loading) {
      return <h2>Loading...</h2>;
    }
    return state.data.categories.map((cat) => <CategoryCard key={cat.idCategory} category={cat.strCategory} image={cat.strCategoryThumb} amount='1' />);
  }

  return (
    <>
      <NavBar />
      <SearchBar />
      <Filter />
      { renderCategories() }
    </>
  );
};

export default Home;
