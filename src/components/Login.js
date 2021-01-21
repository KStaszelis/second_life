import React, {useState} from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "./Firebase";
import { compose } from "recompose";
import { useHistory } from 'react-router-dom'
import {Link as Scroll} from "react-scroll";
const SignUpPage = () => (
    <div>

        <Login/>
    </div>
);

const INITIAL_STATE ={
    name: "",
    email: "",
    password: "",
    passwordTwo: "",
    error: null,
}
const LoginBase = (props) => {
    const [logState, setLogState] = useState(INITIAL_STATE);
    const history = useHistory()
    const onSubmit = (event) => {
        event.preventDefault();
        const { email, password } = logState;

        props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(authUser => {
               setLogState({ ...INITIAL_STATE });
               history.push("/");
            })
            .catch(error => {
                setLogState({ error });
            });


    }
    const {
        name,
        email,
        password,
        passwordTwo,
        error,
    } = logState;


    const onChange = (event) => {
        setLogState(prev => ({...prev, [event.target.name]: event.target.value}));


    }
        return (
            <>
            <div className="high-login-container">
                <nav className="logging-line">
                    <ul className="logging-list">
                        <li className="logging-link"><Link to="/logowanie">Zaloguj</Link></li>
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
            </div>
            <div className="login-container">
                <h1 className="login-title">Zaloguj się</h1>
                <div className="interline-img"> </div>

            <form onSubmit={onSubmit}>
                <div className="internal-login-container">
                    <p className="input-description">Email</p>
                <input
                    className="login-input"
                    name="email"
                    value={email}
                    onChange={onChange}
                    type="text"
                    placeholder="Wpisz swój adres e-mail"
                />
                    <p className="input-description">Hasło</p>
                <input
                    className="login-input"
                    name="password"
                    value={password}
                    onChange={onChange}
                    type="password"
                    placeholder="Wpisz swoje hasło"
                />
                </div>
                <Link className="routing-button" to="/rejestracja">Załóż konto</Link>
                <button className="routing-button" disabled={false} type="submit">Logowanie</button>

                {error && <p>{error.message}</p>}
            </form>
            </div>
                </>
        );

    };
const SignUpLink = () => (
    <p>Nie masz jeszcze konta?<Link to={"/logowanie"}>Zaloguj się</Link></p>
);
const Login = compose(
    withRouter,
    withFirebase,
)(LoginBase);

export default SignUpPage;
export {SignUpLink, Login};