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
import { element } from 'prop-types';


class App extends React.Component {
  Url = "http://localhost:8080";
  constructor() {
    super();
    this.handleGeneric = this.handleGeneric.bind(this);
  }

  state = {
    properties: [],
    filteredProperties: [],
    agents: [],
    agentApplicationId: [],
    assignedProperties: [],
    propertyType: '',
    category: '',
    bed: '',
    bath: '',
    price: [],
    isLoggedIn: false
  }

  getProperties = () => {
    Axios.get(`${this.Url}/properties`)
      .then(response => {
        this.setState({
          properties: response.data
        })
      })
  }

  getAgents = () => {
    Axios.get(`${this.Url}/agents`)
      .then(response => {
        this.setState({
          agents: response.data
        })
      })
  }

  //this for filter form inputs
  handleGeneric(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  //filter from the all properties
  filterProperty = (e, name) => {
    e.preventDefault();

    const filtered = this.state.properties.filter((item) => {
      return (item.category == this.state.category && item.propertyType == this.state.propertyType && item.beds == this.state.bed && item.baths == this.state.bath) || (item.category == this.state.category) || (item.category == this.state.category) || (item.category == this.state.category && item.beds == this.state.bed) || (item.category == this.state.category && item.beds == this.state.bed && item.baths == this.state.bath)
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
    const { agents } = this.state;
    let assignedProperties = [];

    if (returnedEmail) {
      const filteredEmail = agents.find(agent => { return agent.email === returnedEmail })
      if (filteredEmail) {
        for (let i = 0; i < filteredEmail.properties.length; i++) {
          for (let j = 0; j < this.state.properties.length; j++) {
            if (this.state.properties[j].propertyId == this.state.agentApplicationId[i]) {
              assignedProperties.push(this.state.properties[j]);
              break;
            }
          }
        }
      }
      this.setState({
        agentApplicationId: filteredEmail.properties,
        assignedProperties: assignedProperties
      })
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
    this.getProperties();
    this.getAgents();
    this.checkIfLoggedIn();
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact render={() => <Homepage logoImage={Logo} agents={this.state.agents} />} />
            <Route path='/properties' exact render={() => <PropertiesPage logoImage={SecondLogo} agents={this.state.agents} sendingProperties={this.sendingProperties} handleGeneric={this.handleGeneric} filterProperty={this.filterProperty} isLoggedIn={this.state.isLoggedIn} checkIfLoggedIn={this.checkIfLoggedIn} logOut={this.logOut} />} />
            <Route path='/property' render={() => <Property logoImage={SecondLogo} agents={this.state.agents} />} />
            <Route path='/saved' render={() => <SavedListings logoImage={SecondLogo} userData={this.userData} assignedProperties={this.state.assignedProperties} agents={this.state.agents} agentApplicationId={this.state.agentApplicationId} handleGeneric={this.handleGeneric} searchClick={this.searchClick} isLoggedIn={this.state.isLoggedIn} checkIfLoggedIn={this.checkIfLoggedIn} logOut={this.logOut} />} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;