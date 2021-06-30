import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFilterOptions, setFilter, setFilteredOptions } from '../../state/actions';
import Input from './Input';

const Filter = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchFilterOptions());
  })

  const handleInput = (e) => {
    dispatch(setFilteredOptions(e.target.value))
  };

  const renderOptions = () => {
    if (state.loading) {
      return <h1>Loading...</h1>
    }
    const { filter } = state.filter;
    return state.data.filterOptions
            .filter((ingredient) => filter === '' || ingredient.strIngredient.toLowerCase().includes(filter))
            .map((filter) => <Input key={filter.idIngredient} ingredient={filter.strIngredient}/>
          )
  };

  const handleIngredient = (e) => {
    dispatch(setFilter(e.target.value))
  };

  const { checked } = state.filter;
  return (
    <div>
      <h1>Hello Filter</h1>
      <input onChange={handleInput}/>
      <div onChange={handleIngredient} style={{"overflowY": "scroll", "height": "100px"}}>
        {renderOptions()}
      </div>
      <Link to={{pathname: "/filter/results", checked}}>Filter</Link>
    </div>
  )
};

export default Filter;