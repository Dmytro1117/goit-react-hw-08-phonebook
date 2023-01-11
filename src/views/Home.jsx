import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../Styles.module.css';

const HomeView = () => (
  <div className={style.view__container}>
    <h1 className={style.home__title}>Welcome to the phonebook!</h1>
    <p className={style.first}>please</p>
    <div className={style.first__container}>
      <NavLink
        className={({ active }) => (active ? style.active : style.home__linc)}
        to="/login"
      >
        Log in
      </NavLink>
      <p className={style.first}>or</p>
      <NavLink
        className={({ isActive }) => (isActive ? style.active : style.home__linc)}
        to="/register"
      >
        Register
      </NavLink>
    </div>
  </div>
);

export default HomeView;
