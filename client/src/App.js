import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import Homepage from './pages/Homepage/Homepage';
import PropertiesPage from './pages/PropertiesPage/PropertiesPage';
import SecondLogo from './assets/logo/secondlogo.png';
import Logo from './assets/logo/logo.png';


class App extends React.Component {
  Url = "http://localhost:8080";
  state = {
    properties: [],
  }

  getProperties = () => {
    Axios.get(`${this.Url}/properties`)
      .then(response => {
        this.setState({
          properties: response.data
        })
      })
  }
  componentDidMount() {
    this.getProperties();
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact render={() => <Homepage logoImage={Logo} />} />
            <Route path='/properties' exact render={() => <PropertiesPage logoImage={SecondLogo} properties={this.state.properties}/>} />
          </Switch>
        </BrowserRouter>
      </>
        );
      }
    }
    
export default App;