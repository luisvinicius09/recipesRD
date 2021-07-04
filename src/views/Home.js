import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../state/actions';
import CategoryCard from '../components/category/CategoryCard';
import NavBar from '../components/utils/NavBar';
import SearchBar from '../components/search/SearchBar';
import Filter from '../components/filter/Filter';
import Loading from '../components/utils/Loading';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const renderCategories = () => {
    if (state.loading) {
      return <Loading />;
    }
    return state.data.categories.map((cat) => <CategoryCard key={cat.idCategory} category={cat.strCategory} image={cat.strCategoryThumb} amount='1' />);
  }

  return (
    <>
      <NavBar displaySearch={false}/>
      <SearchBar />
      <Filter />
      { renderCategories() }
    </>
  );
};

export default Home;
