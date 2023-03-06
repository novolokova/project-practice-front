import React from 'react';
import { connect } from 'react-redux';
import { clearAuthError } from '../../store/slices/authSlice';
import HeaderRegistrAndLoginPage from '../../components/HeaderRegistrAndLoginPage';
import LoginForm from '../../components/forms/LoginForm';
import styles from './LoginPage.module.sass';

const LoginPage = (props) => (
  <div className={styles.mainContainer}>
    <div className={styles.loginContainer}>
      <HeaderRegistrAndLoginPage />
      <div className={styles.loginFormContainer}>
        <LoginForm history={props.history} />
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  clearError: () => dispatch(clearAuthError()),
});

export default connect(null, mapDispatchToProps)(LoginPage);
