import React from 'react';
import './Footer.scss';
import githubLogo from '../../assets/icons/github.svg';
import instagramLogo from '../../assets/icons/instagram.svg';
import linkedinLogo from '../../assets/icons/linkedin.svg';

class Footer extends React.Component {
    render() {
        return (
            <>
                <footer className="footer">
                    <div className="footer__list">
                        <img className="footer__list-icon" alt="instagram" src={instagramLogo} />
                        <a href="https://github.com/tmouhamed" target="_blank" rel="noopener noreferrer"><img className="footer__list-icon" src={githubLogo} alt="github"/></a>
                        <a href="https://www.linkedin.com/in/toqa-mouhamed/" target="_blank" rel="noopener noreferrer"><img className="footer__list-icon" src={linkedinLogo} alt="linkedIn"/></a>
                    </div>
                    <p className="footer__copy-rights"> Copyright Toqa Mouhamed © 2019 All Rights Reserved </p>
                </footer>
            </>
        )
    }
}
export default Footer;