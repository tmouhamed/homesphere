import React from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import Accordion from 'react-bootstrap/Accordion';
// import { Card, Button } from 'react-bootstrap';
// import Carousel from 'react-bootstrap/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from '../../assets/logo/logo.png'

class Applicants extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }
    show() {
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }
    render() {
        const { applicants, properties, thisApplicants } = this.props
        let specificApplicant = [];
        const customStyles = {
            height: '75%',
        };
        thisApplicants.forEach((applicant) => {
            for (let i = 0; i < applicants.length; i++) {
                if (applicants[i].applicantId === applicant) {
                    specificApplicant.push(applicants[i])
                }

            }
        })
        console.log(this.props.thisApplicants);
        
        return (
            <>
                <button className="main__listings-card__category2" onClick={this.show.bind(this)}>{`${properties.applicants.length} Applications`}</button>
                <Rodal customStyles={customStyles} visible={this.state.visible} onClose={this.hide.bind(this)}>
                    {/* <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">{properties.address}</Accordion.Toggle>
                            </Card.Header>
                            {specificApplicant.map((item) => {
                                return (
                                    <Accordion.Collapse eventKey="0" >
                                        <Card.Body>{`${item.firstName} / ${item.email}`}</Card.Body>
                                    </Accordion.Collapse>
                                )
                            })}
                        </Card>
                    </Accordion> */}

                    <Carousel>
                        <div>

                        <img src={this.props.properties.image[0]} />
                            <p className="legend">{this.props.properties.firstName}</p>
                            
                        </div>
                        <div>
                            <img src={this.props.properties.image[1]} />
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                            <img src={this.props.properties.image[2]} />
                            <p className="legend">Legend 3</p>
                        </div>
                    </Carousel>
                </Rodal>
            </>
        );
    }
}
export default Applicants;