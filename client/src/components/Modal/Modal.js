import React from 'react';
import Rodal from 'rodal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../Header/Header.scss';
import 'rodal/lib/rodal.css';

class Modals extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    show() {
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }

    render() {
        const customStyles = {
            height: '70%'
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
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </TabPanel>
                            {/* SIGN UP */}
                            <TabPanel>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputFirstName">First Name</label>
                                        <input type="firstName" className="form-control" id="exampleInputFirstName" placeholder="John" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputLastName">Last Name</label>
                                        <input type="lastName" className="form-control" id="exampleInputLirstName" placeholder="Wick" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </TabPanel>
                        </Tabs>
                    </div>
                </Rodal>
            </>
        )
    }
}
export default Modals;