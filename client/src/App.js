import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import Homepage from './pages/Homepage/Homepage';
import PropertiesPage from './pages/PropertiesPage/PropertiesPage';
import SecondLogo from './assets/logo/secondlogo.png';
import Logo from './assets/logo/logo.png';


class App extends React.Component {
  Url = "http://localhost:8080";
  constructor() {
    super();
    this.handleGeneric = this.handleGeneric.bind(this);
  }

  state = {
    properties: [],
    filteredProperties: [],
    searchValue: [],
    propertyType: '',
    category: '',
    bed: '',
    bath: '',
    price: [],
  }

  getProperties = () => {
    Axios.get(`${this.Url}/properties`)
      .then(response => {
        this.setState({
          properties: response.data
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
  filterProperty = (e) => {
    e.preventDefault();
    const filtered = this.state.properties.filter((item) => {
      return item.beds == this.state.category && item.propertyType == this.state.propertyType || item.beds == this.state.bed || item.baths == this.state.bath || item.price == this.state.price
    })
    this.setState({
      filteredProperties: filtered
    })
  }

  componentDidMount() {
    this.getProperties();
  }

  sendingProperties = () => {
    // check if any filters have been added on the state
    // return this.state.properties


    if (this.state.filteredProperties == "") {
      console.log(this.state.properties)
      return this.state.properties
    }

    else
      return this.state.filteredProperties
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact render={() => <Homepage logoImage={Logo} />} />
            <Route path='/properties' exact render={() => <PropertiesPage logoImage={SecondLogo} sendingProperties={this.sendingProperties} handleGeneric={this.handleGeneric} filterProperty={this.filterProperty} />} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;