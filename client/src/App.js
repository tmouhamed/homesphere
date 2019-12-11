import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import Homepage from './pages/Homepage/Homepage';
import PropertiesPage from './pages/PropertiesPage/PropertiesPage';
import SecondLogo from './assets/logo/secondlogo.png';
import Logo from './assets/logo/logo.png';
import storageManger from './helpers/storageApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import Property from './pages/Property/Property';
import SavedListings from './pages/SavedListings/SavedListings';
import ApplicationList from './pages/ApplicationList/ApplicationList';


class App extends React.Component {
  Url = "http://localhost:8080";
  constructor() {
    super();
    this.state = {
      properties: [],
      filteredProperties: [],
      agents: [],
      agentApplicationId: [],
      assignedProperties: [],
      applicants: [],
      propertyType: '',
      category: '',
      bed: '',
      bath: '',
      price: [],
      minPrice: '',
      maxPrice: '',
      isLoggedIn: false,
      oneProperty: []
    }
    this.handleGeneric = this.handleGeneric.bind(this);
  }

  getProperties = () => {
    return Axios.get(`${this.Url}/properties`)
      .then(response => {
        this.setState({
          properties: response.data
        })
      })
  }

  getAgents = () => {
    return Axios.get(`${this.Url}/agents`)
      .then(response => {
        this.setState({
          agents: response.data
        })
      })
  }

  getApplicants = () => {
    return Axios.get(`${this.Url}/applicants`)
      .then(response => {
        this.setState({
          applicants: response.data
        })
      })
  }

  getPropertybyID = (id) => {
    if (id) {
      Axios.get(`${this.Url}/properties/${id}/`)
        .then(response => {
          this.setState({
            oneProperty: response.data
          })
        })
    }
  }
  //this for filter form inputs
  handleGeneric(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  //filter from the all properties
  filterProperty = (e, name) => {
    e ? e.preventDefault(): console.log(e)

    const filtered = this.state.properties.filter((item) => {
      return (item.category == this.state.category && item.propertyType == this.state.propertyType && item.beds == this.state.bed && item.baths == this.state.bath)
      || (item.category == this.state.category && item.beds == this.state.bed && item.baths == this.state.bath)  
      || (item.category == this.state.category && item.beds == this.state.bed)  
      || (item.beds == this.state.bed && item.category == this.state.category)
      || (item.beds == this.state.bed)
      || (item.baths == this.state.bath)
      || (item.category == this.state.category)
      || (item.propertyType == this.state.propertyType) 
    })
    this.setState({
      filteredProperties: filtered
    })
  }

  sendingProperties = () => {
    return (this.state.filteredProperties == "") ? this.state.properties : this.state.filteredProperties
  }

  userData = () => {
    const returnedEmail = storageManger.getEmailFromStore();
    const { agents, applicants } = this.state;
    let assignedagentProperties = [];
    let applicantProperties = [];

    if (returnedEmail) {
      const filteredAgentEmail = agents.find(agent => { return agent.email === returnedEmail });
      const filteredApplicantEmail = applicants.find(applicant => { return applicant.email === returnedEmail });
      let propertiesAppliedFor = [];
      if (filteredAgentEmail) {
        for (let i = 0; i < filteredAgentEmail.properties.length; i++) {
          for (let j = 0; j < this.state.properties.length; j++) {
            if (this.state.properties[j].propertyId == filteredAgentEmail.properties[i]) {
              assignedagentProperties.push(this.state.properties[j]);
              break;
            }
          }
        }
        this.setState({
          agentApplicationId: filteredAgentEmail.properties,
          assignedProperties: assignedagentProperties
        })
      }

      else if (filteredApplicantEmail) {
        for (let i = 0; i < filteredApplicantEmail.properties.length; i++) {
          for (let j = 0; j < this.state.properties.length; j++) {
            if (this.state.properties[j].propertyId == filteredApplicantEmail.properties[i]) {
              propertiesAppliedFor.push(this.state.properties[j]);
              break;
            }
          }
        }
        this.setState({
          applicantProperties: propertiesAppliedFor
        })
      }
    }
  }

  checkIfLoggedIn = () => {
    if (storageManger.getLoginStamp()) {
      this.setState({
        isLoggedIn: true
      })
    }
  }

  logOut = () => {
    storageManger.unsetLoginStamp();
    this.setState({
      isLoggedIn: false
    })
  }

  componentDidMount() {
    this.init();
  }

  async init() {
    await this.getProperties();
    await this.getAgents();
    await this.getApplicants();
    this.checkIfLoggedIn();
    this.userData();
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact render={() => <Homepage logOut={this.logOut} checkIfLoggedIn={this.checkIfLoggedIn} isLoggedIn={this.state.isLoggedIn} applicants={this.state.applicants} agents={this.state.agents} logoImage={Logo} handleGeneric={this.handleGeneric} filterProperty={this.filterProperty}/>} />
            <Route path='/properties' exact render={() => <PropertiesPage getPropertybyID={this.getPropertybyID} logoImage={SecondLogo} applicants={this.state.applicants} agents={this.state.agents} sendingProperties={this.sendingProperties} handleGeneric={this.handleGeneric} filterProperty={this.filterProperty} isLoggedIn={this.state.isLoggedIn} checkIfLoggedIn={this.checkIfLoggedIn} logOut={this.logOut} />} />
            <Route path='/properties/:id' render={(props) => <Property {...props} logoImage={SecondLogo} logOut={this.logOut} checkIfLoggedIn={this.checkIfLoggedIn} isLoggedIn={this.state.isLoggedIn} agents={this.state.agents} applicants={this.state.applicants} getPropertybyID={this.getPropertybyID} propertybyId={this.state.oneProperty} sendingProperties={this.sendingProperties} getPropertybyID={this.getPropertybyID} />} />
            <Route path='/saved' render={() => <SavedListings logoImage={SecondLogo} userData={this.userData} assignedProperties={this.state.assignedProperties} agents={this.state.agents} applicants={this.state.applicants} agentApplicationId={this.state.agentApplicationId} handleGeneric={this.handleGeneric} isLoggedIn={this.state.isLoggedIn} checkIfLoggedIn={this.checkIfLoggedIn} logOut={this.logOut} />} />
            <Route path='/applications' render={() => <ApplicationList logoImage={SecondLogo} userData={this.userData} applicantProperties={this.state.applicantProperties} applicants={this.state.applicants} agents={this.state.agents} handleGeneric={this.handleGeneric} isLoggedIn={this.state.isLoggedIn} checkIfLoggedIn={this.checkIfLoggedIn} logOut={this.logOut} />} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;