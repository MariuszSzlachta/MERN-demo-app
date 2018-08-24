import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './Navigation.css';

const Navigation = (props, context) => {
  return (
    <nav className={styles.container}>
      <ul className={styles.navigation}>
        <li className={styles.navigation__item}><Link className={styles.navigation__link}to="/">Posts</Link></li>
        <li className={styles.navigation__item}><Link className={styles.navigation__link}to="/home">Home</Link></li>
        <li className={styles.navigation__item}><Link className={styles.navigation__link}to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
};

export default Navigation;
