/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchFilterOptions, setFilter, setFilteredOptions, handleModal,
} from '../../state/actions';
import Input from './Input';
import styles from '../../assets/css/Filter.module.css';
// import useOnClickOutside from '../../hooks/ClickOutside';

const Filter = () => {
  // const ref = useRef();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  // useOnClickOutside(ref, () => dispatch(handleModal(false)));

  useEffect(() => {
    dispatch(fetchFilterOptions());
  }, [dispatch]);

  const handleInput = (e) => {
    dispatch(setFilteredOptions(e.target.value));
  };

  const renderOptions = () => {
    if (state.loading) {
      return <h1>Loading...</h1>;
    }
    const { filter } = state.filter;
    return state.data.filterOptions
      .filter((ingredient) => filter === '' || ingredient.strIngredient.toLowerCase().includes(filter))
      .map((filter) => <Input key={filter.idIngredient} ingredient={filter.strIngredient} />);
  };

  const handleIngredient = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const handleModalClose = () => {
    dispatch(handleModal(false));
  };

  const { checked } = state.filter;
  return (
    <>
      {state.modal.boolean
        ? (
          <div className={styles.modalContainer}>
            <div
              className={styles.closeModalContainer}
              onClick={handleModalClose}
            />
            <div className={styles.filter}>
              <div className={styles.modalContent}>
                <h1>Filter your ingredient</h1>
                <input onChange={handleInput} />
                <div onChange={handleIngredient} style={{ overflowY: 'auto', height: '100px' }}>
                  {renderOptions()}
                </div>
                <Link to={{ pathname: '/filter/results', checked }}>Filter</Link>
              </div>
            </div>
          </div>
        ) : <></>}
    </>
  );
};

export default Filter;
