import './style.css'
import Logo from "../Logo";
import OptionsHeader from "../OptionsHeader";
import IconeHeader from "../IconesHeader";

function Header() {
    return (
        <header className='App-header'>
            <Logo />
            <OptionsHeader />
            <IconeHeader />
        </header>
    );
};

export default Header;
