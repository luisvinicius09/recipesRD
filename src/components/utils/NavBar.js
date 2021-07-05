import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import styles from '../../assets/css/Navbar.module.css';
import SearchIcon from '../../assets/img/magnifying-glass.png';
import EngineIcon from '../../assets/img/gear.png';

const NavBar = ({ displaySearch }) => (
  <div className={styles.container}>
    <Link to="/filter" className={styles.engineBtn}>
      <img src={EngineIcon} alt="Gear" />
    </Link>
    <Link to="/home" className={styles.title}>
      <h1>RecipesRD</h1>
    </Link>
    { displaySearch
      ? (
        <button type="button" className={styles.displaySearch}>
          <img src={SearchIcon} alt="Search" />
        </button>
      )
      : <div className={styles.hiddenDiv}>Test</div>}
  </div>
);

NavBar.propTypes = {
  displaySearch: propTypes.bool,
};

NavBar.defaultProps = {
  displaySearch: false,
};

export default NavBar;
