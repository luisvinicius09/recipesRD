import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilterOptions, setFilter, setFilteredOptions } from '../state/actions';
import { Link } from 'react-router-dom';
import NavBar from '../components/utils/NavBar';
import Input from '../components/filter/Input';
import styles from '../assets/css/FilterOptions.module.css';

const FilterOptions = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchFilterOptions());
  }, [dispatch]);

  const handleInput = (e) => {
    dispatch(setFilteredOptions(e.target.value))
  };

  const clearFilter = () => {
    dispatch(setFilteredOptions(''))
  }

  const renderOptions = () => {
    if (state.loading) {
      return <h1>Loading...</h1>
    }
    const { filter } = state.filter;
    return state.data.filterOptions
            .filter((ingredient) => filter === '' || ingredient.strIngredient.toLowerCase().includes(filter)|| ingredient.strIngredient.includes(filter)) 
            .map((filter) => <Input key={filter.idIngredient} ingredient={filter.strIngredient}/>
          )
  };

  const handleIngredient = (e) => {
    dispatch(setFilter(e.target.value))
  };

  return (
    <div className={styles.container}>
      <NavBar />
      <input onChange={handleInput} placeholder="Filter ingredient" className={styles.searchFilterBar} />
      <div>
        <div onChange={handleIngredient} className={styles.optionsContainer}>
          {renderOptions()}
        </div>
      </div>
    </div>
  )
}

export default FilterOptions;