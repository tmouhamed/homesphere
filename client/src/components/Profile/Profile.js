import React from 'react';
import { Dropdown } from 'react-bootstrap';
import storageManager from '../../helpers/storageApi';
class Profile extends React.Component {
    render() {
        const checkEmail = storageManager.getEmailFromStore();
        
        const agentDropdown = this.props.agents.find(element => element.email === checkEmail);
        return (
            <>
                {agentDropdown ?
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic"> MY ACCOUNT </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/saved">Properties</Dropdown.Item>
                            <Dropdown.Item onClick={this.props.logOut}>Sign Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    :
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic"> MY ACCOUNT </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="/applications">Application</Dropdown.Item>
                            <Dropdown.Item onClick={this.props.logOut}>Sign Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>}
            </>
        );
    }
}
export default Profile;