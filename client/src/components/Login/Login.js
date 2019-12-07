import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import storageManager from '../../helpers/storageApi';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.emailRef = React.createRef();
        this.state = {
            email: storageManager.getEmailFromStore() || '',
            password: '',
            passwordError: false,
            userError: false,
            isLoggedIn: !!storageManager.getLoginStamp()
        };
    }

    login = event => {
        event.preventDefault();
        storageManager.setEmailInStore(this.state.email);
        const { agents } = this.props; // REVIEW: agents is an array!

        if (this.state.email && !this.state.passwordError) {
            // TODO: go through all the agents, and find the one that matches the email and password
            // use .find()
            const foundAgent = agents.find((agent) => { 
                return agent.email == this.state.email && agent.password == this.state.password
            }) 
            console.log(foundAgent); 
            if (foundAgent) {
                storageManager.setLoginStamp();

                // REVIEW: need to change isLoggedIn in the App.js, so the header updates with the profile button
                // this.setState({
                //     isLoggedIn: true
                // })
                // TODO: 
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

    clearEmail = () => {
        storageManager.setEmailInStore();
        this.emailRef.current.value = '';
    }

    render() {
        return (
            <>
                <Form onSubmit={this.login}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" ref={this.emailRef} onChange={this.updateInput} required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" onChange={this.updateInput} required />
                    </Form.Group>
                    <Button variant="primary" type="submit"> Log Me In </Button>
                    {storageManager.getEmailFromStore() ? <button type="button" onClick={this.clearEmail}> Clear email </button> : null}
                    <span>{this.state.userError ? 'Your email or password is incorrect.' : ''}</span>
                </Form>
            </>
        )
    }
}
export default Login;