import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import {Link as Scroll} from "react-scroll"
import ThreeColumns from "./ThreeColumns";
import {AuthContext} from "../App";
import { withFirebase } from './Firebase';
import { withAuthorization } from "./Session";
const MainHero = () => {
    const user = useContext(AuthContext);
    console.log(user)
    const SignOut = ({ firebase }) => (firebase.doSignOut);
    return (
        <div className="main-frame">
            <div className="img-container"> </div>
            <div className="content-container">
                <nav className="logging-line">

                    <ul className="logging-list">
                        <li className="logging-link">Cześć {user && user?.email} !</li>
                        <li className="logging-link">{user ?<button type="button" onClick={SignOut}><Link to="/wylogowanie">Wyloguj</Link></button>:<Link to="/logowanie">Zaloguj</Link>}</li>
                        <li className="logging-link"><Link to="/rejestracja">Załóż konto</Link></li>
                    </ul>
                </nav>
                <div className="routing-line">
                    <Scroll className="routing-button" to={'whoHelp'}>Start</Scroll>
                    <Scroll className="routing-button" to={'threeCol'}>O co chodzi?</Scroll>
                    <Scroll className="routing-button" to={'aboutUs'}>O nas</Scroll>
                    <Scroll className="routing-button" to={'whoHelp'}>Fundacja i organizacje</Scroll>
                    <Scroll className="routing-button" to={'contact'}>Kontakt</Scroll>
                </div>
                <div className="main-section">
                    <h1 className="main-text">Zacznij pomagać!</h1>
                    <h1 className="main-text">Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <div className="interline-img"> </div>
                    <nav className="big-buttons-line">
                        <ul className="big-buttons">
                            <li><Link to="/logowanie">ODDAJ RZECZY</Link></li>
                            <li><Link to="/logowanie">ZORGANIZUJ ZBIÓRKĘ</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
const condition = authUser => ! ! authUser;

export default withAuthorization(condition)(MainHero);