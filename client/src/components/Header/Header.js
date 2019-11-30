import React from 'react';
import './Header.scss';
import Logo from '../../assets/logo/transparent_logo.png';

class Header extends React.Component {
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <header className="header">
                <div className="header__logo">
                    <img alt="logo" src={Logo} />
                </div>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-list__item"><a className="header__nav-list__link" href="/">Sell</a></li>
                        <li className="header__nav-list__item"><a className="header__nav-list__link" href="/">Buy</a></li>
                        <li className="header__nav-list__item"><a className="header__nav-list__link" href="/">Rent</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
export default Header;