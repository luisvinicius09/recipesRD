import { Link } from 'react-router-dom';

const MealCard = ({ meal, id, image }) => (
  <>
    <Link>
      <img src={image} alt={meal}/>
      <p>{meal}</p>
    </Link>
  </>
);

export default MealCard;