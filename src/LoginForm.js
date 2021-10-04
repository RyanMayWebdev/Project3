import {useState} from "react";
import signUp from "./authentication";
import {signIn} from "./authentication";

const LoginForm = (props) => {
    const [newEmail,
        setNewEmail] = useState('');
    const [newPassword,
        setNewPassword] = useState('');
    const [userEmail,
        setUserEmail] = useState('');
    const [userPassword,
        setUserPassword] = useState('');
    const [username,
        setUsername] = useState('');
    const [validLogin,
        setValidLogin] = useState();

    const errorCheck = (error) => {
        setValidLogin(error);
    }

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        signUp(newEmail, newPassword, props.handleLoginState, username, props.getDisplayName, errorCheck);

    };

    const handleSignInSubmit = (e) => {
        e.preventDefault();
        signIn(userEmail, userPassword, props.handleLoginState, props.getDisplayName, errorCheck);

    };

    return (
        <div className="loginWrapper">
            <div className="formContainer">
                <h2>Create an account:
                </h2>
                <form className="loginForm" onSubmit={handleSignUpSubmit}>
                    <label htmlFor="newEmail">Email</label>
                    <input
                        type="email"
                        value={newEmail}
                        id="newEmail"
                        name="newEmail"
                        onChange={e => setNewEmail(e.target.value)}></input>
                    <label htmlFor="newPassword">Password</label>
                    <input
                        type="password"
                        name="newPassword"
                        id="newPassword"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}></input>
                    <label htmlFor="username">
                        Username:
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}></input>
                    <button>Sign Up!</button>
                    {validLogin !== undefined
                        ? <p>
                                {validLogin}
                            </p>
                        : null
}
                </form>
            </div>
            <div className="formContainer">
                <h2>Sign in:</h2>
                <form className="loginForm"  onSubmit={handleSignInSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        value={userEmail}
                        id="email"
                        name="email"
                        onChange={(e) => setUserEmail(e.target.value)}></input>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}></input>
                    <button>Login!</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
