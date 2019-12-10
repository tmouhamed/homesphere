import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Header from '../../components/Header/Header';
import classnames from 'classnames';
import Listings from '../../components/Listings/Listings';

class ApplicationList extends React.Component {
    
    render() {
        return (
            <>
            <Header logoImage={this.props.logoImage} className={classnames("main__secondHeader main__thirdHeader", this.props.className)} logOut={this.props.logOut} checkIfLoggedIn={this.props.checkIfLoggedIn} applicants={this.props.applicants} agents={this.props.agents} />
                <main className="main">
                    <Tabs>
                        <TabList>
                            <Tab onClick={() => this.props.userData()}>My Properties</Tab>
                        </TabList>
                        <TabPanel>
                            <Listings agentApplicationId={this.props.agentApplicationId} applicantProperties={this.props.applicantProperties} applicants={this.props.applicants}/>
                        </TabPanel>
                    </Tabs>
                </main>
            </>
        );
    }
}
export default ApplicationList;