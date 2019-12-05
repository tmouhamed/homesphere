import React from 'react';
import './Listings.scss';
import House from '../../assets/images/condo.jpg';
import Bed from '../../assets/icons/bed.svg';
import Bath from '../../assets/icons/bathtub.svg';


class Listings extends React.Component {
    render() {
        //depends on the whole properties are sent or the filtered ones
        const properties = this.props.sendingProperties();
        return (
            
            <section className="main__listings">
                {properties.map((item) => {
                    return (
                        <article className="main__listings-card" key={item.propertyId}>
                            <img className="main__listings-card__image" src={House} alt="house" />
                            <span className="main__listings-card__category">{item.category}</span>
                            <h2 className="main__listings-card__title">{item.address}</h2>
                            <div className="main__listings-card__details">
                                <p>{`${item.beds}`} </p>
                                <img alt="bed" src={Bed} />
                                <p>{`| ${item.baths}`}</p>
                                <img alt="bath" src={Bath} />
                            </div>
                        </article>
                    );
                })}
            </section>
        );
    }
}
export default Listings;