import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Header from '../../components/Header/Header';
import classnames from 'classnames';
import storageManger from '../../helpers/storageApi';
import Listings from '../../components/Listings/Listings';
import './SavedListings.scss';

class SavedListings extends React.Component {
    componentWillUpdate() {

    }
    render() {
        console.log(this.props.assignedProperties);

        return (
            <>
                <Header logoImage={this.props.logoImage} className={classnames("main__secondHeader main__thirdHeader", this.props.className)} logOut={this.props.logOut} checkIfLoggedIn={this.props.checkIfLoggedIn} isLoggedIn={this.props.isLoggedIn} agents={this.props.agents} />
                <main className="main">
                    <Tabs>
                        <TabList>
                            <Tab onClick={() => this.props.userData()}>My Properties</Tab>
                        </TabList>
                        <TabPanel>
                            <Listings agentApplicationId={this.props.agentApplicationId} assignedProperties={this.props.assignedProperties} />
                        </TabPanel>
                    </Tabs>
                </main>
            </>
        );
    }
}
export default SavedListings;