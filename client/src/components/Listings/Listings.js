import React from 'react';
import './Listings.scss';
// import House from '../../assets/images/condo.jpg';
import Bed from '../../assets/icons/bed.svg';
import Bath from '../../assets/icons/bathtub.svg';
import { Link } from 'react-router-dom';
import House1 from '../../assets/images/house4-1.jpg';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import Accordion from 'react-bootstrap/Accordion';
import { Card , Button} from 'react-bootstrap';



class Listings extends React.Component {
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
        let properties = [];
        //depends on the whole properties are sent or the filtered ones
        if (this.props.sendingProperties) {
            properties = this.props.sendingProperties();
        } else {
            properties = this.props.assignedProperties;
        }
        return (

            <section className="main__listings">
                {properties.map((item) => {
                    console.log(item);

                    return (
                        <section className="main__listings-card" key={item.propertyId}>
                            <img className="main__listings-card__image" src={House1} alt="house" />
                            <span className="main__listings-card__category">{item.category}</span>
                            {this.props.assignedProperties ?
                                <>
                                    <button className="main__listings-card__category2" onClick={this.show.bind(this)}>{`${item.applicants.length} Applications`}</button>
                                    <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
                                        <Accordion>
                                            <Card>
                                                <Card.Header>
                                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                        Click me!
      </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="0">
                                                    <Card.Body>Hello! I'm the body</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Card.Header>
                                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                                        Click me!
      </Accordion.Toggle>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey="1">
                                                    <Card.Body>Hello! I'm another body</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </Rodal>
                                </>
                                : null}
                            <Link to={`/properties/${item.propertyId}`}><h4 className="main__listings-card__title">{item.address}</h4></Link>
                            <div className="main__listings-card__details">
                                <div className="main__listings-card__details-left">
                                    <p>{`${item.beds}`} </p>
                                    <img alt="bed" src={Bed} />
                                    <p>{`| ${item.baths}`}</p>
                                    <img alt="bath" src={Bath} />
                                    <p>{`$ ${item.price}`}</p>
                                </div>

                            </div>

                        </section>
                    );
                })}
            </section>
        );
    }
}
export default Listings;