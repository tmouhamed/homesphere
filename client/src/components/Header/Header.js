import React from 'react';
import './Header.scss';
import Logo from '../../assets/logo/logo.png';

class Header extends React.Component {
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <header className="main__header">
                <img className="main__header-logo" alt="logo" src={Logo} />
                <nav className="main__header-nav">
                    <ul className="main__header-nav__list">
                        <li className="main__header-nav__list-item"><a className="main__header-nav__list-link" href="/">Sell</a></li>
                        <li className="main__header-nav__list-item"><a className="main__header-nav__list-link" href="/">Buy</a></li>
                        <li className="main__header-nav__list-item"><a className="main__header-nav__list-link" href="/">Rent</a></li>
                        <li className="main__header-nav__list-item"><button className="main__header-nav__list-button">Get Started</button></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
export default Header;