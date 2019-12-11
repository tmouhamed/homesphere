import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Header from '../../components/Header/Header';
import classnames from 'classnames';
import Listings from '../../components/Listings/Listings';
import Footer from '../../components/Footer/Footer';

class ApplicationList extends React.Component {

    render() {
        return (
            <>
                <div id="propertyHeader">
                    <Header logoImage={this.props.logoImage} className={classnames("main__secondHeader main__thirdHeader", this.props.className)} isLoggedIn={this.props.isLoggedIn} logOut={this.props.logOut} checkIfLoggedIn={this.props.checkIfLoggedIn} applicants={this.props.applicants} agents={this.props.agents} />
                </div>
                <main className="main">
                    <Tabs>
                        <TabList>
                            <Tab >My Properties</Tab>
                        </TabList>
                        <TabPanel>
                            <Listings agentApplicationId={this.props.agentApplicationId} applicantProperties={this.props.applicantProperties} applicants={this.props.applicants} />
                        </TabPanel>
                    </Tabs>
                </main>
                <Footer />
            </>
        );
    }
}
export default ApplicationList;