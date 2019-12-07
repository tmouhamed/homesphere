import React from 'react';
import classnames from 'classnames';
import Header from '../../components/Header/Header'
import Carousels from '../../components/Carousel/Carousel';

class Property extends React.Component {
    render() {
        return (
            <>
            <Header logoImage={this.props.logoImage} className={classnames("main__secondHeader", this.props.className)}/>
                <main className="main">
                    <Carousels />
                </main>
            </>
        );
    }
}
export default Property;