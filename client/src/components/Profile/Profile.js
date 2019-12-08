import React from 'react';
import { Dropdown } from 'react-bootstrap';
class Profile extends React.Component {
    render() {
        return (
            <>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic"> MY ACCOUNT </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/saved">Saved</Dropdown.Item>
                        <Dropdown.Item onClick={this.props.logOut}>Sign Out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown></>
        );
    }
}
export default Profile;