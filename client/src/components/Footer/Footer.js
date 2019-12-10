import React from 'react';
import './Footer.scss';
import fbLogo from '../../assets/icons/facebook.svg';
import githubLogo from '../../assets/icons/github.svg';
import instagramLogo from '../../assets/icons/instagram.svg';
import linkedinLogo from '../../assets/icons/linkedin.svg';


class Footer extends React.Component {
    render() {
        return (
            <>
                <footer class="footer">
                    <div class="footer__list">
                        <img class="footer__list-icon" src={instagramLogo} />
                        <img class="footer__list-icon" src={fbLogo} />
                        <img class="footer__list-icon" src={linkedinLogo} />
                    </div>
                    <p class="footer__copy-rights"> Copyright Toqa Mouhamed © 2018 All Rights Reserved </p>
                </footer>
            </>
        )
    }
}
export default Footer;