import {logout} from "../utilities/authentication";
const Header = (props) => {

    const handleClick = () => {
        logout(props.handleLoginState);
    }

    const selectClass = props.loggedIn
        ? "channelSelect"
        : "hidden"
    return (

        <header>
            <div className='headerWrapper'>
                <h1>Bubbles</h1>
                <div className="options">
                    <form >
                        <label htmlFor="channelSelect">Channel:
                        </label>
                        <select
                            id="channelSelect"
                            name="channelSelect"
                            className={selectClass}
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