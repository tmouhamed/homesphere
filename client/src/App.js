import React from 'react';
import Homepage from './pages/Homepage/Homepage';

class App extends React.Component {
  api = "https://api.simplyrets.com/properties";
  render() {
    return (
      <>
        <Homepage />
      </>
    );
  }
}

export default App;