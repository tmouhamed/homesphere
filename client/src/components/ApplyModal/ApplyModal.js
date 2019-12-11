import React from 'react';
import Rodal from 'rodal';
import Form from 'react-bootstrap/Form';
import { Button, Col, Row } from 'react-bootstrap';
import "react-tabs/style/react-tabs.css";

class ApplyModel extends React.Component {
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
            height: '60%',
            width: '45%',
            overflow: "scroll"
        };
        return (
            <>
                <button className="main__section-secondRow__right-applyButton" onClick={this.show.bind(this)}>Apply</button>
                <Rodal customStyles={customStyles} visible={this.state.visible} onClose={this.hide.bind(this)}>
                        <h1 className="main__section-secondRow__right-personTitle main__section-secondRow__right-personTitle2 ">Online Rental Application Form</h1>
                        <p class="main__section-secondRow__right-jobTitle2">Please fill in our Rental Application Form in order to express your interest in renting a property.</p>
                           
                            <Form>
                                <Form.Group as={Row} controlId="formHorizontalname">
                                    <Form.Label column sm={3}>Name</Form.Label>
                                    <Col sm={4}>
                                        <Form.Control type="firstName" placeholder="First Name" />
                                    </Col>
                                    <Col sm={5}>
                                        <Form.Control type="lastName" placeholder="Last Name" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                    <Form.Label column sm={3}> Email </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control type="email" placeholder="Email" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formBasicnumber">
                                    <Form.Label column sm={3}>Phone</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control type="phone" placeholder="Phone Number" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formBasicaddress">
                                    <Form.Label column sm={3}>Current Address</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control type="address" name="address" placeholder="Street Address" onChange={this.updateInput} required />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formBasicaddress" className="cityMargin">
                                    <Col as={Col} md="4">
                                        <Form.Control type="address" name="city" placeholder="City" onChange={this.updateInput} required />
                                    </Col>
                                    <Col as={Col} md="4">
                                        <Form.Control type="address" name="region" placeholder="Region" onChange={this.updateInput} required />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formBasicaddress" className="cityMargin">
                                    <Col as={Col} md="4">
                                        <Form.Control type="address" name="city" placeholder="Posatl / Zip Code" onChange={this.updateInput} required />
                                    </Col>
                                    <Col as={Col} md="4">
                                        <Form.Control type="address" name="country" placeholder="Country" onChange={this.updateInput} required />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                    <Form.Label column sm={3}> Number of people to move in </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control type="number" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                    <Form.Label column sm={3}>When do you want to move in? </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control type="date" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label as="legend" column sm={3}>Are you or any other occupant a smoker?  </Form.Label>
                                    <Col sm={4}>
                                        <Form.Check
                                            type="radio"
                                            label="Yes"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios1"
                                        />
                                    </Col>
                                    <Col sm={4}>
                                        <Form.Check
                                            type="radio"
                                            label="No"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios2"
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label as="legend" column sm={3}>Do you have pets?  </Form.Label>
                                    <Col sm={4}>
                                        <Form.Check
                                            type="radio"
                                            label="Yes"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios3"
                                        />
                                    </Col>
                                    <Col sm={4}>
                                        <Form.Check
                                            type="radio"
                                            label="No"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios4"
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label as="legend" column sm={3}>Have you ever been evicted?  </Form.Label>
                                    <Col sm={4}>
                                        <Form.Check
                                            type="radio"
                                            label="Yes"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios5"
                                        />
                                    </Col>
                                    <Col sm={4}>
                                        <Form.Check
                                            type="radio"
                                            label="No"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios5"
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formBasicjob">
                                    <Form.Label column sm={3}>Employment Letter</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control type="file" name="job" placeholder="Job" onChange={this.updateInput} required />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="formBasiincome">
                                    <Form.Label column sm={3}>Yearly Income</Form.Label>
                                    <Col sm={9}>
                                        <Form.Control type="income" name="income" placeholder="" onChange={this.updateInput} required />
                                    </Col>
                                </Form.Group>
                                <Form.Group className="special-center">
                                    <Button variant="primary" type="submit" className="main__form-fieldset__submit-button"> Send </Button></Form.Group>
                            </Form>
                </Rodal>
            </>
        )
    }
}
export default ApplyModel;