import React from 'react';
import Burgermenu from '../../components/Burgermenu/Burgermenu';
import Hero from '../../components/Hero/Hero';

class Homepage extends React.Component {
    render() {
        return (
            <>
                <Hero logoImage={this.props.logoImage}></Hero>
                <Burgermenu />
                <main>
                </main>
            </>
        );
    }
}
export default Homepage;