import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {
    render() {
        return (
            <header className={`main__header ${this.props.className}`}>
                <Link to="/"><img className="main__header-logo" alt="logo" src={this.props.logoImage} /></Link>
                <nav className="main__header-nav">
                    <ul className="main__header-nav__list">
                        <li className="main__header-nav__list-item"><Link to="/properties" className="main__header-nav__list-link" href="/">Sell</Link></li>
                        <li className="main__header-nav__list-item"><Link to="/properties" className="main__header-nav__list-link" href="/">Buy</Link></li>
                        <li className="main__header-nav__list-item"><Link to="/properties" className="main__header-nav__list-link" href="/">Rent</Link></li>
                        <li className="main__header-nav__list-item"><button className="main__header-nav__list-button">Get Started</button></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
export default Header;