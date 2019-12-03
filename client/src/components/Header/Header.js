import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {
    render() {
        console.log(this.props)
        return (
            <header className={`main__header ${this.props.className}`}>
                <Link to="/"><img className="main__header-logo" alt="logo" src={this.props.logoImage} /></Link>
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