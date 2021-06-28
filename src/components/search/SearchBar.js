import { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("")
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  };

  return (
    <>
      <br /><input onChange={ handleInputChange }/>
      <Link to={{ pathname: "/search/results", inputValue }}>Submit</Link>
      <br />
    </>
  );
};

export default SearchBar;