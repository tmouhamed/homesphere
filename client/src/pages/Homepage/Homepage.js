import React from 'react';
import Burgermenu from '../../components/Burgermenu/Burgermenu';
import Hero from '../../components/Hero/Hero';

class Homepage extends React.Component {
    render() {
        return (
            <>
                <Hero tabIndex={this.props.tabIndex} logoImage={this.props.logoImage} logOut={this.props.logOut} isLoggedIn={this.props.isLoggedIn} checkIfLoggedIn={this.props.checkIfLoggedIn} applicants={this.props.applicants} agents={this.props.agents} handleGeneric={this.props.handleGeneric} filterProperty={this.props.filterProperty} tabIndexCheck ={this.props.tabIndexCheck }></Hero>
                <Burgermenu />
                <main className="main">
                </main>
            </>
        );
    }
}
export default Homepage;