import {logout} from "../utilities/authentication";
const Header = (props) => {

    const handleClick = () => {
        logout(props.handleLoginState);
    }
    const headerClass = props.loggedIn
        ? "headerWrapper shiftRight"
        : "headerWrapper"
    return (

        <header>
            <div className={headerClass}>
                <h1>Bubbles</h1>
                <form >
                    <select onChange={ (e) => props.changeChannel(e.target.value)} >
                        <option value="general">General</option>
                        <option value="gaming">Gaming</option>
                        <option value="movies">Movies</option>
                        <option value="music">Music</option>
                    </select>
                </form>
            </div>
            {props.loggedIn
                ? <button className="logoutBtn" onClick={handleClick}>Logout</button>
                : null
}
        </header>
    )
};

export default Header;