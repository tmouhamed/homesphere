import React from 'react';
import './Hero.scss';
import Particles from 'react-particles-js';
import Header from '../Header/Header';
import MediaQuery from 'react-responsive';
import Form from '../Form/Form';

class Hero extends React.Component {
    render() {
        return (
            <>
                <MediaQuery minDeviceWidth={768}>
                    <section className="main__hero">
                        <Particles className="particle-js"
                            params={{
                                "particles": {
                                    "number": {
                                        "value": 240
                                    },
                                    "size": {
                                        "value": 4
                                    }
                                },
                                "interactivity": {
                                    "events": {
                                        "onhover": {
                                            "enable": true,
                                            "mode": "repulse"
                                        }
                                    }
                                }
                            }} />
                    </section>
                    <div id="particles-js"></div>
                </MediaQuery>

                <Header logoImage={this.props.logoImage} logOut={this.props.logOut} checkIfLoggedIn={this.props.checkIfLoggedIn} isLoggedIn={this.props.isLoggedIn} applicants={this.props.applicants} agents={this.props.agents} /> 
                <Form  tabIndex={this.props.tabIndex} handleGeneric={this.props.handleGeneric} filterProperty={this.props.filterProperty} tabIndexCheck={this.props.tabIndexCheck }/>
            </>
        );
    }
}
export default Hero;