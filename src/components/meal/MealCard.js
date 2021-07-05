import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import styles from '../../assets/css/MealCard.module.css';

const MealCard = ({ meal, id, image }) => (
  <div className={styles.container}>
    <Link to={`/meals/${id}`}>
      <img src={image} alt={meal} />
      <div className={styles.bgText}>
        <p>{meal}</p>
      </div>
    </Link>
  </div>
);

MealCard.propTypes = {
  meal: propTypes.string,
  id: propTypes.string,
  image: propTypes.string,
};

MealCard.defaultProps = {
  meal: 'Beef',
  id: 2,
  image: 'http://',
};

export default MealCard;
