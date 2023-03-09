import React from 'react';
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import browserHistory from './browserHistory';
import WithPrivate from './components/HOC/WithPrivate';
import WithOnlyNotAuthorizedUser from './components/HOC/WithOnlyNotAuthorizedUser';
import LoginPage from './pages/LoginPage';
import ContestCreationPage from './pages/ContestCreation/ContestCreationPage';
import RegistrationPage from './pages/RegistrationPage';
import Home from './pages/Home';
import PricingPage from './pages/PricingPage';
import Payment from './pages/Payment/Payment';
import StartContestPage from './pages/StartContestPage/';
import Dashboard from './pages/Dashboard';
import ContestPage from './pages/ContestPage/ContestPage';
import UserProfilePage from './pages/UserProfilePage';
import NotFound from './components/NotFound/NotFound';
import ChatContainer from './components/Chat/ChatComponents/ChatContainer/ChatContainer';
import CONSTANTS from './constants';


const App = () => {
  return (
    <Router history={browserHistory}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pricing" component={PricingPage} />
        <Route
          exact
          path="/login"
          component={WithOnlyNotAuthorizedUser(LoginPage)}
        />
        <Route
          exact
          path="/registration"
          component={WithOnlyNotAuthorizedUser(RegistrationPage)}
        />
        <Route exact path="/payment" component={WithPrivate(Payment)} />
        <Route
          exact
          path="/startContest"
          component={WithPrivate(StartContestPage)}
        />
        <Route
          exact
          path="/startContest/nameContest"
          component={WithPrivate(ContestCreationPage, {
            contestType: CONSTANTS.NAME_CONTEST,
            title: 'Company Name',
          })}
        />
        <Route
          exact
          path="/startContest/taglineContest"
          component={WithPrivate(ContestCreationPage, {
            contestType: CONSTANTS.TAGLINE_CONTEST,
            title: 'TAGLINE',
          })}
        />
        <Route
          exact
          path="/startContest/logoContest"
          component={WithPrivate(ContestCreationPage, {
            contestType: CONSTANTS.LOGO_CONTEST,
            title: 'LOGO',
          })}
        />
        <Route exact path="/dashboard" component={WithPrivate(Dashboard)} />
        <Route exact path="/contest/:id" component={WithPrivate(ContestPage)} />
        <Route exact path="/account" component={WithPrivate(UserProfilePage)} />
        <Route component={NotFound} />
      </Switch>
      <ChatContainer />
    </Router>
  );
};

export default App;
