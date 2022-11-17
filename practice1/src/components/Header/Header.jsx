import Style from './Header.module.css';

function Header() {
    return(
        <div className = {Style.nav}>
            <h1 className={Style.title}>MY TODO LIST APPLICATION</h1>
        </div>
    )
}

export default Header;