import { Link } from 'react-router-dom';
import styles from '../../assets/css/MealCard.module.css';

const MealCard = ({ meal, id, image }) => (
  <div className={styles.container}>
    <Link to={"/meals/" + id}>
      <img src={image} alt={meal}/>
      <div className={styles.bgText}>
        <p>{meal}</p>
      </div>
    </Link>
  </div>
);

export default MealCard;