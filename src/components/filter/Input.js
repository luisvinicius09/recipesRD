const Input = ({ ingredient }) => (
  <>
    <input type="radio" name="filter" value={ingredient}/>{ingredient}
  </>
);

export default Input;