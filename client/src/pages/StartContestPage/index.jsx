import React from 'react';
import { connect } from 'react-redux';
import { updateBundle } from '../../store/slices/bundleSlice';
import StartContest from '../../components/StartContest';
import MostPopularCategories from '../../components/MostPopularCategories';
import SaveOurPackages from '../../components/SaveOurPackages';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import CONSTANTS from '../../constants';

const StartContestPage = (props) => {
  if (props.userStore.data.role !== CONSTANTS.CUSTOMER) {
    props.history.replace('/');
  }
  return (
    <div>
      <Header />
      <StartContest />
      <MostPopularCategories />
      <SaveOurPackages />
      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => {
  const { bundleStore, userStore } = state;
  return { bundleStore, userStore };
};
const mapDispatchToProps = (dispatch) => ({
  choseBundle: (bundle) => dispatch(updateBundle(bundle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StartContestPage);
