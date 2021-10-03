import {logout} from "./authentication";
const Header = (props) => {
    const handleClick = () => {
        console.log('clicked')
        logout(props.handleLoginState);
    }
    return (
        <header>
            <h1>Bubbles</h1>
            <button onClick={ handleClick }>Logout</button>
        </header>
    )
};

export default Header;