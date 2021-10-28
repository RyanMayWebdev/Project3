import {logout} from "../utilities/authentication";
import Menu from "./Menu";
import { useState } from "react";


const Nav = (props) => {
    const [menuClicked, setMenuClicked] = useState(false);
    const handleClick = () => {
        logout(props.handleLoginState);
        menuToggle();
    }

    const menuToggle = () => {
        setMenuClicked(!menuClicked);
    };

    //toggle display of buttons and dropdowns in header
    const optionClass = props.loggedIn
        ? "options"
        : "hidden"

    let shiftClass = props.loggedIn ? 'hideHeader ': 'shift ';
    shiftClass = menuClicked ? shiftClass + 'showHeader' : shiftClass;
    const menuIcon = menuClicked ? 'fas fa-times' : 'fas fa-bars';


    return ( 
    <> 
        {props.loggedIn ? <Menu menuIcon={menuIcon} handleClick={menuToggle} menuClick={menuClicked}/> : null }
        <header className = {
            shiftClass
        } > 
            <div className='headerWrapper'>
                <h1>Bubbles</h1>
                <div className={optionClass}>
                    <form onClick={menuToggle}>
                        <label htmlFor="channelSelect">Channel:
                        </label>

                        <input
                            type='button'
                            onClick={(e) => props.changeChannel(e.target.value)}
                            name='channelSelect'
                            value="general"/>
                        <input
                            type="button"
                            onClick={(e) => props.changeChannel(e.target.value)}
                            name='channelSelect'
                                value="gaming"/>
                        <input
                            type="button"
                            onClick={(e) => props.changeChannel(e.target.value)}
                            name='channelSelect'
                            value="movies"/>
                        <input
                            type="button"
                            onClick={(e) => props.changeChannel(e.target.value)}
                            name='channelSelect'
                            value="music"/>

                    </form>
                {props.loggedIn
                    ? <button className="logoutBtn" onClick={handleClick}>Logout</button>
                    : null
                }
                </div>
            </div> 
        </header >
    </>
)
};

export default Nav;