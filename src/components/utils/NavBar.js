import { Link } from 'react-router-dom';
import styles from '../../assets/css/Navbar.module.css';
import SearchIcon from '../../assets/img/magnifying-glass.png';
import EngineIcon from '../../assets/img/gear.png';

const NavBar = ({ displaySearch }) => (
  <div className={styles.container}>
    <button className={styles.engineBtn}>
      <img src={EngineIcon} alt="Ger" />
    </button>
    <Link to="/home" className={styles.title}>
      <h1>RecipesRD</h1>
    </Link>
    { displaySearch ?
      <button className={styles.displaySearch}>
        <img src={SearchIcon} alt="Search"/>
      </button>
      :
      <div className={styles.hiddenDiv}>Test</div>
    }
  </div>
  
);

export default NavBar;