import React from 'react';
import classnames from 'classnames';
import Header from '../../components/Header/Header';
import { Carousel } from '3d-react-carousal';
import '../SavedListings/SavedListings.scss';
import './Property.scss';
import Image1 from '../../assets/images/house4.jpg';
import Image2 from '../../assets/images/house4-1.jpg';
import Image3 from '../../assets/images/house4-2.jpg';
import Bed from '../../assets/icons/bed.svg';
import Bath from '../../assets/icons/bathtub.svg';
import Cheched from '../../assets/icons/checked.svg';
import Fitness from '../../assets/icons/fitness.svg';
import Parking from '../../assets/icons/parking.svg';
import Washer from '../../assets/icons/washer.svg';
import Dishwasher from '../../assets/icons/dishwasher.svg';
import ContactModel from '../../components/ContactModal/ContactModal';


class Property extends React.Component {
    componentDidMount() {
        this.props.getPropertybyID(this.props.match.params.id);
    }
    render() {
        const { address, baths, beds, category, city, price, propertyType, zipCode, agentId } = this.props.propertybyId;
        const thisAgent = this.props.agents.find((agent) => { return agent.agentId == agentId });
        let slides = [
            <img src={Image1} alt="1" />,
            <img src={Image2} alt="2" />,
            <img src={Image3} alt="3" />,
        ];
        return (
            <>
                <Header logoImage={this.props.logoImage} className={classnames("main__secondHeader main__thirdHeader", this.props.className)} logOut={this.props.logOut} checkIfLoggedIn={this.props.checkIfLoggedIn} isLoggedIn={this.props.isLoggedIn} agents={this.props.agents} />
                <main className="main">
                    <Carousel slides={slides} />
                    <section className="main__section">
                        <div className="main__section-firstRow">
                            <div className="main__section-firstRow-left">
                                <h1>{`$${price}`}</h1><span>/per month</span>
                            </div>
                            <div className="main__section-firstRow-right">
                                <div className="main__section-firstRow-right__icon">
                                    <img alt="bed" src={Bed} />
                                    <p>{`${beds} Beds`}</p>
                                </div>
                                <div className="main__section-firstRow-right__icon">
                                    <img alt="bath" src={Bath} />
                                    <p>{`${baths} Bath`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="main__section-secondRow">
                            <div className="main__section-secondRow__left">
                                <span>{`${city} > ${category} > ${address}`}</span>
                                <h2>{address}</h2>
                                <p>{`No fee! This one of a kind 1640 sq.ft. ${beds} bedroom ${baths} bathroom apartment is located in the heart of Greenwich Village in a modern full service building.24K features a large open kitchen, a massive living room with adjacent balcony, 9 foot ceilings, abundant closet space and beautiful new floors. Enjoy unobstructed north and east city views.Georgetown Plaza has a host of amenities such as the beautifully landscaped 360 degree roof-top deck, brand new gym, swimming pool and building-accessible parking garage. Laundry is located on every floor.Located conveniently on 8th Street and Mercer, you are a 10 second walk to N and R lines and 2 mins walk to the 6 train, 5min walk to downtown`}</p>
                                <h4 className="main__section-secondRow__left-secondTitle">UNIT AMENITIES</h4>
                                <div className="main__section-secondRow__left-amenities">
                                    <div className="main__section-secondRow__left-amenities__amenity">
                                    <img alt="checked" src={Cheched}/><span>Air Conditioned</span>
                                    </div>
                                    <div className="main__section-secondRow__left-amenities__amenity">
                                    <img alt="checked" src={Fitness}/><span>Fitness Center</span>
                                    </div>
                                    <div className="main__section-secondRow__left-amenities__amenity">
                                    <img alt="checked" src={Parking}/><span>Garage</span>
                                    </div>
                                    <div className="main__section-secondRow__left-amenities__amenity">
                                    <img alt="checked" src={Washer}/><span>Washer Dryer</span>
                                    </div>
                                    <div className="main__section-secondRow__left-amenities__amenity">
                                    <img alt="checked" src={Dishwasher}/><span>Dishwasher</span>
                                    </div>
                                </div>
                                <button className="main__section-secondRow__left-applyButton">Apply</button>
                            </div>
                            {thisAgent ?
                                <div className="main__section-secondRow__right">
                                    <div className="main__section-secondRow__right-avatar">{`${thisAgent.firstName[0]}${thisAgent.lastName[0]}`}</div>
                                    <h1 className="main__section-secondRow__right-personTitle">{`${thisAgent.firstName} ${thisAgent.lastName}`}</h1>
                                    <p className="main__section-secondRow__right-jobTitle">{`${thisAgent.jobTitle} - ${thisAgent.company}`}</p>
                                    <p>{thisAgent.phone}</p>
                                    <ContactModel thisAgent={thisAgent}/>
                                </div>
                                : null}
                        </div>
                    </section>
                </main>
            </>
        );
    }
}
export default Property;