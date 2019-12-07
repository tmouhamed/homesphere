import React from 'react';
import Axios from 'axios';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import storageManager from '../../helpers/storageApi';

class Signup extends React.Component {
    url = "http://localhost:8080";

    postNewUser = (event, name) => {
        const newUser = {
            username: event.target.username.value,
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            password: event.target.password.value,
            checkbox: event.target.checkbox.value,
        }
        return Axios.post(`${this.url}/agents/`, newUser)
            .then(response => {
                this.props.show();
            })
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.postNewUser(event);
        this.props.checkIfLoggedIn();
    }

    render() {
        return (
            <>
                <Form onSubmit={this.submitHandler}>
                    <Form.Group controlId="formBasicUserName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="name" name="username" />
                    </Form.Group>
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
                        <Form.Check type="checkbox" name="checkbox" label="Are you an agent ?" />
                    </Form.Group>
                    <Button variant="primary" type="submit"> Sign Me Up </Button>
                    {storageManager.getEmailFromStore() ? <Form.Group><Form.Label> You have successeflly signed up </Form.Label></Form.Group> : null}
                </Form>
            </>
        )
    }
}
export default Signup;