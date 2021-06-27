import { Link } from 'react-router-dom';

const Category = ({ category, image, amount }) => (
  <>
    <Link to={category}>
      <img src={ image } alt={ category }/>
      <div>
        <p>{ category }</p>
        <span>{ amount }</span>
      </div>
    </Link>
  </>
);

export default Category;