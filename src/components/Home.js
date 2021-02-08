import React from "react";
import MainHero from "./MainHero"
import ThreeColumns from "./ThreeColumns";
import FourSteps from "./FourSteps";
import AboutUs from "./AboutUs"
import WhoHelp from "./WhoHelp";
import FooterForm from "./FooterForm"
const Home = () => {
    return (
        <>
        <MainHero/>
        <ThreeColumns/>
        <FourSteps/>
        <AboutUs/>
        <WhoHelp/>
        <FooterForm/>
        </>
    );
};

export default Home;