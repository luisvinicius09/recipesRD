import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import styles from '../../assets/css/CategoryCard.module.css';

const CategoryCard = ({ category, image }) => (
  <div className={styles.container}>
    <Link to={`/categories/${category}`}>
      <img src={image} alt={category} />
      <div className={styles.description}>
        <p>{category}</p>
      </div>
    </Link>
  </div>
);

CategoryCard.propTypes = {
  category: propTypes.string,
  image: propTypes.string,
};

CategoryCard.defaultProps = {
  category: 'Beef',
  image: 'http://',
};

export default CategoryCard;
