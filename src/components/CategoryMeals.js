import { useParams } from 'react-router-dom'

const CategoryMeals = () => {
  const { category } = useParams();
  
  return (
    <h1>Category meals of { category }</h1>
  )
};

export default CategoryMeals;