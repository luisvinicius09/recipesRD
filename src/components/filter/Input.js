import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import styles from '../../assets/css/Input.module.css';

const Input = ({ ingredient }) => (
  <>
    <Link className={styles.container} to={{ pathname: '/filter/results', checked: ingredient }}>{ingredient}</Link>
  </>
);

Input.propTypes = {
  ingredient: propTypes.string,
};

Input.defaultProps = {
  ingredient: 'Beef',
};

export default Input;
