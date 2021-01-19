import React from 'react';
import {Link} from "react-router-dom";
const FourSteps = () => {
    return (
        <div className="four-steps-main-container">
            <h2 className="four-steps-title">Wystarczą 4 proste kroki</h2>
            <div className="interline-img"> </div>
            <div className="four-steps-internal-container">
                <div className="step-container">
                    <div className="step-img-1"> </div>
                    <h4 className="step-txt">Wybierz rzeczy</h4>
                    <p className="step-description-line">__________</p>
                    <p className="step-description">ubrania, zabawki,</p>
                    <p className="step-description">sprzęt i inne</p>
                </div>
                <div className="step-container">
                    <div className="step-img-2"> </div>
                    <h4 className="step-txt">Spakuj je</h4>
                    <p className="step-description-line">__________</p>
                    <p className="step-description">skorzystaj z </p>
                    <p className="step-description">worków na śmieci</p>
                </div>
                <div className="step-container">
                    <div className="step-img-3"> </div>
                    <h4 className="step-txt">Zdecyduj komu <br/> chcesz pomóc</h4>
                    <p className="step-description-line">__________</p>
                    <p className="step-description">wybierz zaufane </p>
                    <p className="step-description">miejsce</p>
                </div>
                <div className="step-container">
                    <div className="step-img-4"> </div>
                    <h4 className="step-txt">Zamów kuriera</h4>
                    <p className="step-description-line">__________</p>
                    <p className="step-description">kurier przyjedzie</p>
                    <p className="step-description">w dogodnym terminie</p>
                </div>
            </div>
            <div className="step-button"> <Link to="/logowanie">ODDAJ<br/>RZECZY</Link></div>
        </div>
    )
}
export default FourSteps;