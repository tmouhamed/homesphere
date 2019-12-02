import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import MediaQuery from 'react-responsive';
//assets
import Logo from '../../assets/logo/logo.png';
import './Burgermenu.scss';

class Burgermenu extends React.Component {
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <MediaQuery maxDeviceWidth={767}>
                <header className="header__mobile" id="outer-container">
                    <div className="header__mobile-logo">
                        <img alt="logo" src={Logo} />
                    </div>
                    <Menu right pageWrapId={"page-wrap"} width={ '70%' }  outerContainerId={"outer-container"}>
                        <ul id="page-wrap">
                            <li> <a className="header__nav-list__link" href="/">Sell</a></li>
                            <li> <a className="header__nav-list__link" href="/">Buy</a></li>
                            <li> <a className="header__nav-list__link" href="/">Rent</a></li>
                        </ul>
                    </Menu>
                </header>
            </MediaQuery>
        );
    }
}
export default Burgermenu;