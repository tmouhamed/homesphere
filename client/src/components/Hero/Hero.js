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
                <Header agents={this.props.agents} logoImage={this.props.logoImage}/>
                <Form />
            </>
        );
    }
}
export default Hero;