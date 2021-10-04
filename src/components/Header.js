import {logout} from "../utilities/authentication";
const Header = (props) => {
    const handleClick = () => {
        logout(props.handleLoginState);
    }
    return (
        <header>
            <div className="headerWrapper"><h1>Bubbles</h1></div>
            <button className="logoutBtn" onClick={ handleClick }>Logout</button>
        </header>
    )
};

export default Header;