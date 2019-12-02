import React from 'react';
import './Header.scss';
import Logo from '../../assets/logo/logo.png';

class Header extends React.Component {
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <section className="main__header">
                <div className="main__header-logo">
                    <img alt="logo" src={Logo} />
                </div>
                <nav className="main__header-nav">
                    <ul className="main__header-nav__list">
                        <li className="main__header-nav__list-item"><a className="main__header-nav__list-link" href="/">Sell</a></li>
                        <li className="main__header-nav__list-item"><a className="main__header-nav__list-link" href="/">Buy</a></li>
                        <li className="main__header-nav__list-item"><a className="main__header-nav__list-link" href="/">Rent</a></li>
                    <li><button className="main__header-nav__button">Login</button></li>
                    </ul>
                </nav>
            </section>
        );
    }
}
export default Header;