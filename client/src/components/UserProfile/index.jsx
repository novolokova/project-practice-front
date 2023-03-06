import React from 'react';
import styles from './UserProfile.module.sass';
import classNames from 'classnames';
import CONSTANTS from '../../constants';
import UserInfo from '../UserInfo/UserInfo';
import Error from '../../components/Error/Error';
import PayForm from '../PayForm/PayForm';

const UserProfile = (props) => {
    const pay = values => {
        const { number, expiry, cvc, sum } = values;
        props.cashOut({
          number,
          expiry,
          cvc,
          sum,
        });
      };
    
      const {
        balance,
        role,
        profileViewMode,
        changeProfileViewMode,
        error,
        clearPaymentStore,
      } = props;
    return (
        <div className={styles.mainContainer}>
        <div className={styles.aside}>
          <span className={styles.headerAside}>Select Option</span>
          <div className={styles.optionsContainer}>
            <div
              className={classNames(styles.optionContainer, {
                [styles.currentOption]:
                  profileViewMode === CONSTANTS.USER_INFO_MODE,
              })}
              onClick={() => changeProfileViewMode(CONSTANTS.USER_INFO_MODE)}
            >
              UserInfo
            </div>
            {role === CONSTANTS.CREATOR && (
              <div
                className={classNames(styles.optionContainer, {
                  [styles.currentOption]:
                    profileViewMode === CONSTANTS.CASHOUT_MODE,
                })}
                onClick={() => changeProfileViewMode(CONSTANTS.CASHOUT_MODE)}
              >
                Cashout
              </div>
            )}
          </div>
        </div>
        {profileViewMode === CONSTANTS.USER_INFO_MODE ? (
          <UserInfo />
        ) : (
          <div className={styles.container}>
            {parseInt(balance) === 0 ? (
              <span className={styles.notMoney}>
                There is no money on your balance
              </span>
            ) : (
              <div>
                {error && (
                  <Error
                    data={error.data}
                    status={error.status}
                    clearError={clearPaymentStore}
                  />
                )}
                <PayForm sendRequest={pay} />
              </div>
            )}
          </div>
        )}
      </div>
    );
}

export default UserProfile;
