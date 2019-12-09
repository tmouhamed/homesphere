import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Profile from '../Profile/Profile';
import Modals from '../Modals/Modals';

class Header extends React.Component {
    render() {
        return (
            <header className={`main__header ${this.props.className}`}>
                <Link to="/"><img className="main__header-logo" alt="logo" src={this.props.logoImage} /></Link>
                <nav className="main__header-nav">
                    <ul className="main__header-nav__list">
                        <li className="main__header-nav__list-item"><Link to="/properties" className="main__header-nav__list-link" href="/">Buy</Link></li>
                        <li className="main__header-nav__list-item"><Link to="/properties" className="main__header-nav__list-link" href="/">Rent</Link></li>
                        { this.props.isLoggedIn ? <Profile logOut={this.props.logOut} userData={this.props.userData} agents={this.props.agents} applicants={this.props.applicants}/> : <Modals agents={this.props.agents} checkIfLoggedIn={this.props.checkIfLoggedIn} applicants={this.props.applicants}/> }
                    </ul>
                </nav>
            </header>
        );
    }
}
export default Header;