import React from 'react';
import './Secondhero.scss';
import Particles from 'react-particles-js';
import Form from '../Form/Form';

class Secondhero extends React.Component {
    render() {
        return (
            <>
                <section className="main__secondhero">
                    {/* <Particles
                        params={{
                            "particles": {
                                "number": {
                                    "value": 160,
                                    "density": {
                                        "enable": false
                                    }
                                },
                                "size": {
                                    "value": 10,
                                    "random": true
                                },
                                "move": {
                                    "direction": "bottom",
                                    "out_mode": "out"
                                },
                                "line_linked": {
                                    "enable": false
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onclick": {
                                        "enable": true,
                                        "mode": "remove"
                                    }
                                },
                                "modes": {
                                    "remove": {
                                        "particles_nb": 10
                                    }
                                }
                            }
                        }} /> */}
                </section>
                <div id="particles-js"></div>
                {/* <Form /> */}
            </>
        );
    }
}
export default Secondhero;
