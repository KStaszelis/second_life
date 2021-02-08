import React from "react";
import {Link as Scroll} from "react-scroll";
import FormSteps from "./FormSteps";
import FooterForm from "./FooterForm";

const FormPage=()=>{

    return (<>
        <div className="top-menu">
            <div className="login-register">
                <h4>Cześć ... </h4>
                <button className="button"><a href="/wylogowanie">Wyloguj</a></button>
                <button className="button"><a href="oddajrzeczy">Oddaj rzeczy</a></button>
            </div>
            <div className="routing-line">
                <Scroll className="routing-button" to={'whoHelp'}>Start</Scroll>
                <Scroll className="routing-button" to={'threeCol'}>O co chodzi?</Scroll>
                <Scroll className="routing-button" to={'aboutUs'}>O nas</Scroll>
                <Scroll className="routing-button" to={'whoHelp'}>Fundacja i organizacje</Scroll>
                <Scroll className="routing-button" to={'contact'}>Kontakt</Scroll>
            </div>
        </div>
        <div className="header-home">
            <div className="left-panel">
                <div className="image-left-form"> </div>
            </div>
            <div className="right-panel">
                <div className="form1-center">
                    <div className="title">Oddaj rzeczy, których już nie chcesz <div>POTRZEBUJĄCYM</div></div>
                    <div className="decoration home-decoration"> </div>
                    <h2>Wystarczą 4 proste kroki</h2>
                </div>

            </div>
        </div>
        <div className="form-important">
            <h4>Ważne</h4>
            <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
        </div>
        <FormSteps/>
        <FooterForm/>
    </>)

}

export default FormPage;