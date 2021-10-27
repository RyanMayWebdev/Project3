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

                            <input type='button' onClick={(e) => props.changeChannel(e.target.value)} name='channelSelect' value="general" />
                            <input type="button" onClick={(e) => props.changeChannel(e.target.value)} name='channelSelect' value="gaming" />
                            <input type="button" onClick={(e) => props.changeChannel(e.target.value)} name='channelSelect' value="movies" />
                            <input type="button" onClick={(e) => props.changeChannel(e.target.value)} name='channelSelect' value="music" />

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