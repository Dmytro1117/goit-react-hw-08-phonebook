import style from '../Styles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import authSelectors from '../redux/auth/auth-selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <div className={style.user__container}>
      <p className={style.user__link}>Hello, {name} ({email})</p>
      <button
        className={style.user__btn}
        type="submit"
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        Logout
      </button>
    </div>
  );
}
