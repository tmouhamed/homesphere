import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Header from '../../components/Header/Header';
import classnames from 'classnames';
import storageManger from '../../helpers/storageApi';
import Listings from '../../components/Listings/Listings';
import './SavedListings.scss';

class SavedListings extends React.Component {
    // componentDidMount(){

    //     this.props.userData();
    // }
    render() {
        return (
            <>
                <Header logoImage={this.props.logoImage} className={classnames("main__secondHeader main__thirdHeader", this.props.className)} logOut={this.props.logOut} checkIfLoggedIn={this.props.checkIfLoggedIn} isLoggedIn={this.props.isLoggedIn} agents={this.props.agents} />
                <main className="main">
                    <Tabs>
                        <TabList>
                            <Tab >My Properties</Tab>
                        </TabList>
                        <TabPanel>
                            <Listings agentApplicationId={this.props.agentApplicationId} assignedProperties={this.props.assignedProperties} applicants={this.props.applicants}/>
                        </TabPanel>
                    </Tabs>
                </main>
            </>
        );
    }
}
export default SavedListings;