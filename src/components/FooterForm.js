import React from "react";

const FooterForm =()=>{
    return (<>
        <div id="contact" className="aboutUs-main-container">
            <div className="image-left-contact"> </div>
            <div className="center-contact">
                <div className="aboutUs-title ">Skontaktuj się z nami</div>
                <div className="interline-img"> </div>
                <br/>
                <form  className="contact-form">
                    <div className="inputs-close">
                        <div className="inputs-column">
                            <label className="login-input bold">Wpisz swoje imię</label>
                            <input type="text" placeholder="Krzysztof"/>
                            <hr className="line-contact"/>
                        </div>
                        <div className="inputs-column">
                            <label className="label-contact bold">Wpisz swój email</label>
                            <input type="email" placeholder="abc@xyz.pl"/>
                            <hr className="line-contact"/>
                        </div>
                    </div>
                    <br/>
                    <label className="label-contact bold">Wpisz swoją wiadomość</label>
                    <div>
                        <textarea cols="70" rows="6" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "/>
                        <hr/>
                    </div>
                    <div className="button-submit">
                        <button className="routing-button">Wyślij</button>
                    </div>
                </form>

            </div>

        </div>
        <div className="header-home">
            <div className="footer">Copyright by CodersLab</div>
            <div className="socialMedia">
                <div className="iconFb"> </div>
                <div className="iconInstagram"> </div>
            </div>
        </div>

    </>)
}

export default FooterForm;