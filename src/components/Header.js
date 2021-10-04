import {logout} from "../utilities/authentication";
const Header = (props) => {
    const handleClick = () => {
        logout(props.handleLoginState);
    }
    const headerClass = props.loggedIn ? "headerWrapper shiftRight" : "headerWrapper"
    return (

        <header>
            <div className={headerClass}><h1>Bubbles</h1></div>
            {
               props.loggedIn ? <button className="logoutBtn" onClick={ handleClick }>Logout</button> : null
            }
        </header>
    )
};

export default Header;