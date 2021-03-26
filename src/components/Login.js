import React, {useState} from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "./Firebase";
import { compose } from "recompose";
import { useHistory } from 'react-router-dom'
const SignUpPage = () => (
    <div>
        <h1>Zaloguj się</h1>
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
            <form onSubmit={onSubmit}>

                <input
                    name="email"
                    value={email}
                    onChange={onChange}
                    type="text"
                    placeholder="Wpisz swój adres e-mail"
                />
                <input
                    name="password"
                    value={password}
                    onChange={onChange}
                    type="password"
                    placeholder="Wpisz swoje hasło"
                />

                <button disabled={false} type="submit">Zarejestruj się</button>

                {error && <p>{error.message}</p>}
            </form>
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