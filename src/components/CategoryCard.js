import { Link } from 'react-router-dom';

const CategoryCard = ({ category, image, amount }) => (
  <>
    <Link to={"/home/" + category}>
      <img src={ image } alt={ category }/>
      <div>
        <p>{ category }</p>
        <span>{ amount }</span>
      </div>
    </Link>
  </>
);

export default CategoryCard;