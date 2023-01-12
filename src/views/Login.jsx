import style from '../Styles.module.css';
import { useState } from 'react';
import authOperations from '../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <div className={style.view__container}>
      <h2 className={style.home__title}>Log in</h2>
      <form className={style.form__container} onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button type="submit " className={style.form__btn}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
