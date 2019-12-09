import React from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../Header/Header.scss';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

class Modals extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }

    show() {
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }

    render() {
        const customStyles = {
            height: '75%'
        };
        return (
            <>
                <li className="main__header-nav__list-item"><button className="main__header-nav__list-button" onClick={this.show.bind(this)}>Get Started</button></li>
                <Rodal customStyles={customStyles} visible={this.state.visible} onClose={this.hide.bind(this)}>
                    <div>
                        <Tabs>
                            <TabList>
                                <Tab>Sign In</Tab>
                                <Tab>Sign Up</Tab>
                            </TabList>
                            {/* SIGN IN  */}
                            <TabPanel>
                                <Login hide={this.hide} agents={this.props.agents} checkIfLoggedIn={this.props.checkIfLoggedIn} applicants={this.props.applicants}/>
                            </TabPanel>
                            <TabPanel>
                                <Signup show={this.show} agents={this.props.agents} applicants={this.props.applicants} hide={this.hide} checkIfLoggedIn={this.props.checkIfLoggedIn} />
                            </TabPanel>
                        </Tabs>
                    </div>
                </Rodal>
            </>
        )
    }
}
export default Modals;