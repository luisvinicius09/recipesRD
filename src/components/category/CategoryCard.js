import { Link } from 'react-router-dom';
import styles from '../../assets/css/CategoryCard.module.css';

const CategoryCard = ({ category, image }) => (
  <div className={styles.container}>
    <Link to={"/categories/" + category}>
      <img src={ image } alt={ category }/>
      <div className={styles.description}>
        <p>{ category }</p>
      </div>
    </Link>
  </div>
);

export default CategoryCard;