import React from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import Collapsible from 'react-collapsible';
import './Applicants.scss';

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
            height: '50%',
            overflow: 'scroll',
            padding: '30px 25px'
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
                    {specificApplicant.map((item) => {
                        return (
                            <Collapsible trigger={`${item.firstName} ${item.lastName}`}>
                                <ul>
                                    <li>{`Name: ${item.firstName} ${item.lastName}`}</li>
                                    <li>{`Email Address: ${item.email}`}</li>
                                    <li>{`Phone Number: ${item.phone}`}</li>
                                </ul>
                            </Collapsible>
                        )
                    })}

                </Rodal>
            </>
        );
    }
}
export default Applicants;