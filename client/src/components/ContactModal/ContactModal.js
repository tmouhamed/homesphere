import React from 'react';
import Rodal from 'rodal';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

class ContactModel extends React.Component {
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
            height: '85%',
            width: '45%',
        };
        return (
            <>
                <button className="main__section-secondRow__right-contactButton" onClick={this.show.bind(this)}>Contact</button>
                <Rodal customStyles={customStyles} visible={this.state.visible} onClose={this.hide.bind(this)}>
                    <Tabs>
                        <TabList>
                            <Tab>Contact</Tab>
                            <Tab>Apply</Tab>
                        </TabList>
                        <TabPanel>
                            {this.props.thisAgent ?
                                <div className="main__section-secondRow__right main__section-secondRow__right2">
                                    <div className="main__section-secondRow__right-avatar">{`${this.props.thisAgent.firstName[0]}${this.props.thisAgent.lastName[0]}`}</div>
                                    <h1 className="main__section-secondRow__right-personTitle">{`${this.props.thisAgent.firstName} ${this.props.thisAgent.lastName}`}</h1>
                                    <p className="main__section-secondRow__right-jobTitle">{`${this.props.thisAgent.jobTitle} - ${this.props.thisAgent.company}`}</p>
                                    <h5 className="main__section-secondRow__right-fromTitle"> FROM</h5>
                                </div>
                                : null}
                            <Form>
                                <Form.Group controlId="formBasicFirstname">
                                    <Form.Control type="name" name="firstName" placeholder="First Name" onChange={this.updateInput} required />
                                </Form.Group>
                                <Form.Group controlId="formBasicLastname">
                                    <Form.Control type="name" name="lastName" placeholder="Last Name" onChange={this.updateInput} required />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" name="email" placeholder="Email" onChange={this.updateInput} required />
                                </Form.Group>
                                <h5 className="main__section-secondRow__right-fromTitle"> MESSAGE</h5>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows="3" />
                                </Form.Group>
                                <Form.Group>
                                    <Button variant="primary" type="submit" className="main__form-fieldset__submit-button"> Send </Button></Form.Group>
                            </Form>
                        </TabPanel>


                        <TabPanel>
                            <Form>
                                <Form.Group controlId="formBasicFirstname">
                                    <Form.Control type="name" name="firstName" placeholder="First Name" onChange={this.updateInput} required />
                                </Form.Group>
                                <Form.Group controlId="formBasicLastname">
                                    <Form.Control type="name" name="lastName" placeholder="Last Name" onChange={this.updateInput} required />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" name="email" placeholder="Email" onChange={this.updateInput} required />
                                </Form.Group>
                                <Form.Group controlId="formBasicLastname">
                                    <Form.Control type="password" name="password" placeholder="Password" onChange={this.updateInput} required />
                                </Form.Group>
                                <Form.Group controlId="formBasicLastname">
                                    <Form.Control type="phone" name="phone" placeholder="Phone Number" onChange={this.updateInput} required />
                                </Form.Group>
                                <Form.Group>
                                    <Button variant="primary" type="submit" className="main__form-fieldset__submit-button"> Send </Button></Form.Group>
                            </Form>
                        </TabPanel>
                    </Tabs>
                </Rodal>
            </>
        )
    }
}
export default ContactModel;