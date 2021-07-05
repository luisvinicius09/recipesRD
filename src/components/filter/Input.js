import styles from '../../assets/css/Input.module.css'
import { Link } from 'react-router-dom';

const Input = ({ ingredient }) => (
  <>
    <Link className={styles.container} to={{ pathname: '/filter/results', checked: ingredient}}>{ingredient}</Link>
  </>
);

export default Input;