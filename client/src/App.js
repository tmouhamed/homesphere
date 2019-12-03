import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import PropertiesPage from './pages/PropertiesPage/PropertiesPage';
import SecondLogo from './assets/logo/secondlogo.png';
import Logo from './assets/logo/logo.png';


class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact render={() => <Homepage logoImage={Logo} />} />
            <Route path='/properties' exact render={() => <PropertiesPage logoImage={SecondLogo} />} />
          </Switch>
        </BrowserRouter>
      </>
        );
      }
    }
    
export default App;