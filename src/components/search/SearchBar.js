import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../../assets/css/Searchbar.module.css';
import RightArrow from '../../assets/img/right-arrow.png';
import { setSearch } from '../../state/actions';

const SearchBar = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const handleSubmit = (e) => {
    if (e.key === 'Enter') {
      dispatch(setSearch(e.target.value));
    }
  };

  const { value } = state.search;

  return (
    <div className={styles.container}>
      <input className={styles.searchInput} onChange={handleInputChange} onKeyDown={(e) => handleSubmit(e)} placeholder="Search recipe" />
      <Link to={{ pathname: '/search/results', inputValue: value }} className={styles.submitButton}>
        <img src={RightArrow} alt="Submit" />
      </Link>
      <br />
    </div>
  );
};

export default SearchBar;
