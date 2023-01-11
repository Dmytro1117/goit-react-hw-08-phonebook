import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../Styles.module.css';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      {isLoggedIn ? (
        <NavLink
          className={({ isActive }) => (isActive ? style.active : style.nav__link)}
          to="/contacts"
        >
          Contacts
        </NavLink>
      ) : (
        <NavLink
          className={({ isActive }) => (isActive ? style.active : style.nav__link)}
          to="/"
        >
          Home
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
