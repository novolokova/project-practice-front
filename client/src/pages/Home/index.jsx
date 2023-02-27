import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import SliderBar from '../../components/SliderBar';
import Footer from '../../components/Footer/Footer';
import carouselConstants from '../../carouselConstants';
import Spinner from '../../components/Spinner/Spinner';

import CONSTANTS from '../../constants';
import styles from './Home.module.sass';
import OurSponsors from '../../components/OurSponsors';
import HomeWhySquadhelp from '../../components/HomeWhySquadhelp';
import HowDoContestWork from '../../components/HowDoContestWork';
import BrandableNames from '../../components/BrandableNames';
import AskedQuestions from '../../components/AskedQuestions';
import NamesForSale from '../../components/NamesForSale';
import Dashboard from '../Dashboard/Dashboard';
import DashboardBtn from '../../components/DashboardBtn';


const Home = (props) => {
  const [index, setIndex] = useState(0);
  const [styleName, setStyle] = useState(styles.headline__static);

  useEffect(() => {
    const timeout = setInterval(() => {
      setIndex(index + 1);
      setStyle(styles.headline__isloading);
    }, 3000);
    return () => {
      setStyle(styles.headline__static);
      clearInterval(timeout);
    };
  });

  const { isFetching } = props;
  const text =
    CONSTANTS.HEADER_ANIMATION_TEXT[
      index % CONSTANTS.HEADER_ANIMATION_TEXT.length
    ];
  return (
    <>
      <Header />
      {isFetching ? (
        <Spinner mtop />
      ) : (
        <>
          <div className={styles.container}>
            <div className={styles.headerBar}>
              <div className={styles.headline}>
                <span>Find the Perfect Name for</span>
                <span className={styleName}>{text}</span>
              </div>
              <p>
                Launch a naming contest to engage hundreds of naming experts as
                you’re guided through our agency-level naming process. Or,
                explore our hand-picked collection of premium names available
                for immediate purchase
              </p>
            </div>


            <DashboardBtn/>

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
            <AskedQuestions />

            <NamesForSale />
            <SliderBar
              images={carouselConstants.exampleSliderImages}
              carouselType={carouselConstants.EXAMPLE_SLIDER}
            />       
            <DashboardBtn/>


            <div className={styles.blueContainer}>
              <h2 className={styles.whiteUnderline}>What our customers say</h2>
              <SliderBar
                images={carouselConstants.feedbackSliderImages}
                carouselType={carouselConstants.FEEDBACK_SLIDER}
              />
            </div>
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
