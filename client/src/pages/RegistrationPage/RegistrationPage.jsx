import React from 'react';
import { connect } from 'react-redux';
import { clearAuthError } from '../../store/slices/authSlice';
import HeaderRegistrAndLoginPage from '../../components/HeaderRegistrAndLoginPage';
import RegistrationForm from '../../components/forms/RegistrationForm';
import FooterRegistrationForm from '../../components/FooterRegistrationForm';
import styles from './RegistrationPage.module.sass';

const RegistrationPage = (props) => {
  props.clearError();

  return (
    <div className={styles.signUpPage}>
      <div className={styles.signUpContainer}>
        <HeaderRegistrAndLoginPage />
        <RegistrationForm history={props.history} />
      </div>
      <FooterRegistrationForm />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearError: () => dispatch(clearAuthError()),
});

export default connect(null, mapDispatchToProps)(RegistrationPage);
