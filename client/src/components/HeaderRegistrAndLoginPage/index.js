import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../components/Logo';
import CONSTANTS from '../../constants';
import styles from './HeaderRegistrAndLoginPage.module.scss';

const HeaderRegistrAndLoginPage = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.container}>
      <Logo src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} />
      {pathname === '/' || pathname === '/registration' ? (
        <div className={styles.linkContainer}>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <span>Login</span>
          </Link>
        </div>
      ) : (
        <div className={styles.linkContainer}>
          <Link to="/registration" style={{ textDecoration: 'none' }}>
            <span>Signup</span>
          </Link>
        </div>
      )}
    </div>
  );
};
export default HeaderRegistrAndLoginPage;
