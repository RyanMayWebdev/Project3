const Menu = (props) => {

    return (
        <>
            <i className={props.menuIcon} onClick={props.handleClick}></i>
        </>
    )
};

export default Menu;