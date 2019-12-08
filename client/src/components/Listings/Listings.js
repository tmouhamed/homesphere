import React from 'react';
import './Listings.scss';
// import House from '../../assets/images/condo.jpg';
import Bed from '../../assets/icons/bed.svg';
import Bath from '../../assets/icons/bathtub.svg';
import { Link } from 'react-router-dom';
import House1 from '../../assets/images/house4-1.jpg';


class Listings extends React.Component {
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

                    return (
                        <Link to="/property" className="main__listings-card" key={item.propertyId}>
                            <img className="main__listings-card__image" src={House1} alt="house" />
                            <span className="main__listings-card__category">{item.category}</span>
                            <h4 className="main__listings-card__title">{item.address}</h4>
                            <div className="main__listings-card__details">
                                <p>{`${item.beds}`} </p>
                                <img alt="bed" src={Bed} />
                                <p>{`| ${item.baths}`}</p>
                                <img alt="bath" src={Bath} />
                                <p>{`$ ${item.price}`}</p>
                            </div>
                        </Link>
                    );
                })}
            </section>
        );
    }
}
export default Listings;