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

        <header className={props.class}>
            <div className='headerWrapper'>
                <h1>Bubbles</h1>
                <div className={optionClass}>
                    <form >
                        <label htmlFor="channelSelect">Channel:
                        </label>
                        <div
                            id="channelSelect"
                            name="channelSelect"
                            className="channelSelect"
                            onChange={(e) => props.changeChannel(e.target.value)}>
                            <input type='radio' name='channelSelect' value="general" /> General
                            <input type="radio" name='channelSelect' value="gaming" />Gaming
                            <input type="radio" name='channelSelect' value="movies" />Movies
                            <input type="radio" name='channelSelect' value="music" />Music
                        </div>
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