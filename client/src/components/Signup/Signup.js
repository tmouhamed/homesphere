import React from 'react';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import storageManager from '../../helpers/storageApi';

class Signup extends React.Component {
    url = "http://localhost:8080";
    state = {
        checkbox: false
    }

    postNewAgent = (event, name) => {
        const newUser = {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            password: event.target.password.value
        }
        return Axios.post(`${this.url}/agents/`, newUser)
            .then(response => {
                alert('You Have Successfully Signed Up!')
                this.props.hide();
            })
    }

    postNewUser = (event, name) => {
        const newUser = {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            password: event.target.password.value
        }
        return Axios.post(`${this.url}/applicants/`, newUser)
            .then(response => {
                alert('You Have Successfully Signed Up!')
                this.props.hide();
            })
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.state.checkbox ? this.postNewAgent(event) : this.postNewUser(event);
        this.props.checkIfLoggedIn();
        this.props.hide();
    }
    checkboxValue = (event) => {
        this.setState({
            [event.target.name]: event.target.checked
        })
    }

    render() {

        return (
            <>
                <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="name" name="firstName" placeholder="John" required />
                    </Form.Group>
                    <Form.Group controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="name" name="lastName" placeholder="Wick" required />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group controlId="formBasicphone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="tel" name="phone" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" name="checkbox" label="Are you an agent ?" onClick={this.checkboxValue} />
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" type="submit"> Sign Me Up </Button></Form.Group>
                    <Form.Group>
                        <Form.Label> {storageManager.getEmailFromStore() ? 'You have successeflly signed up' : null}</Form.Label>
                    </Form.Group>
                </Form>
            </>
        )
    }
}
export default Signup;