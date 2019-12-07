import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import storageManager from '../../helpers/storageApi';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: storageManager.getEmailFromStore() || '',
            password: '',
            passwordError: false,
            userError: false
        };
    }

    login = event => {
        event.preventDefault();
        storageManager.setEmailInStore(this.state.email);
        const { agents } = this.props;
        if (this.state.email && !this.state.passwordError) {
            const foundAgent = agents.find((agent) => {
                return agent.email == this.state.email && agent.password == this.state.password
            })

            if (foundAgent) {
                storageManager.setLoginStamp();
                this.props.checkIfLoggedIn();
            }
            else {
                this.setState({
                    userError: true
                })
            }
        }
    }

    updateInput = event => {
        //Validation for password
        if (event.target.name == 'password') {
            if (event.target.value.length < 8) {
                this.setState({
                    passwordError: true
                })
            }
            else
                this.setState({
                    passwordError: false
                })
        }
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <>
                <Form onSubmit={this.login}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.updateInput} required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" onChange={this.updateInput} required />
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" type="submit"> Log Me In </Button></Form.Group>
                    <Form.Group controlId="formBasicError">
                        <Form.Label>{this.state.userError ? 'Your email or password is incorrect.' : ''}</Form.Label>
                    </Form.Group>
                </Form>
            </>
        )
    }
}
export default Login;