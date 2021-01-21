import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import {AuthContext} from "../App";
const withAuth = (condition) => Component => {
    const WithAuthorization = () => {
        useEffect(() => {
            listener = props.firebase.auth.onAuthStateChanged(
                authUser => {
                    if (!condition(authUser)) {
                        history.push("/logowanie")
                    }
                }
            )
        })
            return (
                <AuthContext.Consumer>
                    {authUser =>
                        condition(authUser) ? <Component {...props}/> : null
                    }
                </AuthContext.Consumer>
    );
    }

    return compose (
        withRouter,
        withFirebase,
        )(WithAuthorization);
};

export default withAuth;