import { Link } from 'react-router-dom';
import styles from '../../assets/css/Navbar.module.css';
import SearchIcon from '../../assets/img/magnifying-glass.png';
import EngineIcon from '../../assets/img/gear.png';
import { handleModal } from '../../state/actions';
import { useDispatch } from 'react-redux';

const NavBar = ({ displaySearch }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <button onClick={() => dispatch(handleModal(true))} className={styles.engineBtn}>
        <img src={EngineIcon} alt="Gear" />
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
}
export default NavBar;