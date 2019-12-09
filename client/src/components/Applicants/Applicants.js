import React from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import Accordion from 'react-bootstrap/Accordion';
import { Card, Button } from 'react-bootstrap';
import { element } from 'prop-types';

class Applicants extends React.Component {
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
        const { applicants, properties, thisApplicants } = this.props
        let specificApplicant = [];
        const customStyles = {
            height: 'auto',
        };
        thisApplicants.forEach((applicant) => {
            for (let i = 0; i < applicants.length; i++) {
                if (applicants[i].applicantId === applicant) {
                    specificApplicant.push(applicants[i])
                }

            }
        })
        return (
            <>
                <button className="main__listings-card__category2" onClick={this.show.bind(this)}>{`${properties.applicants.length} Applications`}</button>
                <Rodal customStyles={customStyles} visible={this.state.visible} onClose={this.hide.bind(this)}>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">{properties.address}</Accordion.Toggle>
                            </Card.Header>
                            {specificApplicant.map((item) => {
                                return (
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>{`${item.firstName} / ${item.email}`}</Card.Body>
                                    </Accordion.Collapse>
                                )
                            })}
                        </Card>
                    </Accordion>
                </Rodal>
            </>
        );
    }
}
export default Applicants;