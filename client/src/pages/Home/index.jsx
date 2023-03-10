import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import SliderBar from '../../components/SliderBar';
import Footer from '../../components/Footer';
import Spinner from '../../components/Spinner/Spinner';
import OurSponsors from '../../components/OurSponsors';
import HomeWhySquadhelp from '../../components/HomeWhySquadhelp';
import HowDoContestWork from '../../components/HowDoContestWork';
import BrandableNames from '../../components/BrandableNames';
import FAQ from '../../components/FAQ';
import NamesForSale from '../../components/NamesForSale';
import DashboardBtn from '../../components/DashboardBtn';
import CustomersSay from '../../components/CustomersSay';
import FindPerfectName from '../../components/FindPerfectName';
import carouselConstants from '../../carouselConstants';
import styles from './Home.module.sass';


const Home = (props) => {
  const { isFetching } = props;
  return (
    <>
      <Header />
      {isFetching ? (
        <Spinner mtop />
      ) : (
        <>
          <div className={styles.container}>
            <FindPerfectName />
            <DashboardBtn />
            <div className={styles.greyContainer}>
              <SliderBar
                images={carouselConstants.mainSliderImages}
                carouselType={carouselConstants.MAIN_SLIDER}
              />
            </div>
            <HomeWhySquadhelp />
            <OurSponsors />
            <HowDoContestWork />
            <BrandableNames />
            <FAQ/>
            <NamesForSale />
            <SliderBar
              images={carouselConstants.exampleSliderImages}
              carouselType={carouselConstants.EXAMPLE_SLIDER}
            />
            <DashboardBtn />
            <CustomersSay />
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { isFetching } = state.userStore;
  return { isFetching };
};

export default connect(mapStateToProps, null)(Home);
