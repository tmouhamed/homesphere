import React from 'react';
import Burgermenu from '../../components/Burgermenu/Burgermenu';
import Hero from '../../components/Hero/Hero';

class Homepage extends React.Component {
    render() {
        return (
            <>
                <Hero agents={this.props.agents} logoImage={this.props.logoImage}></Hero>
                <Burgermenu />
                <main className="main">
                </main>
            </>
        );
    }
}
export default Homepage;