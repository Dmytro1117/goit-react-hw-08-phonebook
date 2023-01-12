import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../Styles.module.css';

export default function AuthNav() {
  return (
    <div className={style.reg_log__container}>
      <NavLink
        className={({ isActive }) => (isActive ? style.active : style.nav__link)}
        to="/register"
      >
        Registration
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? style.active : style.nav__link)}
        to="/login"
      >
        Login
      </NavLink>
    </div>
  );
}
