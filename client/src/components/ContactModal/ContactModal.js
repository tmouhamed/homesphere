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
            height: '55%',
            width: '25%',
        };
        return (
            <>
                <button className="main__section-secondRow__right-contactButton" onClick={this.show.bind(this)}>Contact</button>
                <Rodal customStyles={customStyles} visible={this.state.visible} onClose={this.hide.bind(this)}>
                    <Tabs>
                        <TabList>
                            <Tab>Apply</Tab>
                        </TabList>
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