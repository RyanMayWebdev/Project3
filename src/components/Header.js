import {logout} from "../utilities/authentication";
const Header = (props) => {

    const handleClick = () => {
        logout(props.handleLoginState);
    }

    //toggle display of buttons and dropdowns in header
    const optionClass = props.loggedIn
        ? "options"
        : "hidden"
    return (

        <header>
            <div className='headerWrapper'>
                <h1>Bubbles</h1>
                <div className={optionClass}>
                    <form >
                        <label htmlFor="channelSelect">Channel:
                        </label>
                        <select
                            id="channelSelect"
                            name="channelSelect"
                            className="channelSelect"
                            onChange={(e) => props.changeChannel(e.target.value)}>
                            <option value="general">General</option>
                            <option value="gaming">Gaming</option>
                            <option value="movies">Movies</option>
                            <option value="music">Music</option>
                        </select>
                    </form>
                    {props.loggedIn
                        ? <button className="logoutBtn" onClick={handleClick}>Logout</button>
                        : null
}
                </div>
            </div>

        </header>
    )
};

export default Header;