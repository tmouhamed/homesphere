import React from 'react';
import './Listings.scss';
import Bed from '../../assets/icons/bed.svg';
import Bath from '../../assets/icons/bathtub.svg';
import { Link } from 'react-router-dom';
import House1 from '../../assets/images/house4-1.jpg';
import Applicants from '../Applicants/Applicants';

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
                        <section className="main__listings-card" key={item.propertyId}>
                            <img className="main__listings-card__image" src={House1} alt="house" />
                            <span className="main__listings-card__category">{item.category}</span>
                            {this.props.assignedProperties ?
                                <>
                                <Applicants properties={item} thisApplicants={item.applicants} applicants={this.props.applicants}/>
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