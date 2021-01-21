import React from 'react';

import { withFirebase } from './Firebase';
import {Link} from "react-router-dom";

const SignOut = ({ firebase }) => (
    <div className="log-out-container">
    <h1 className="main-text">Wylogowanie nastąpiło pomyślnie!</h1>
        <div className="interline-img"> </div>
        <p className="logging-link"><Link to="/">Strona główna</Link></p>
    </div>
);

export default withFirebase(SignOut);

//<button type="button" onClick={firebase.doSignOut}>
//         Wyloguj się
//     </button>