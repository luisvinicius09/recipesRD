import styles from '../../assets/css/Input.module.css'

const Input = ({ ingredient }) => (
  <>
    <label className={styles.container}>{ingredient}
      <input type="radio" name="filter" value={ingredient}/>
      <span className={styles.checkmark}></span>
    </label>
  </>
);

export default Input;