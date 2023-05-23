import styles from './Button.module.scss'

const LoginButton = ({size, state, title, isValid }) => {
  return (
    <button
      disabled={!isValid}
      className={`${styles[size]} ${styles[state]}`}
    >
      {title}
    </button>
  );
};
export default LoginButton;
