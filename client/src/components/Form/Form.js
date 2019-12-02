import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import './Form.scss';

class Form extends React.Component {
  iceCreamFlavors = ['chocolate', 'vanilla', 'peanut butter', 'mint'];
  state = {
    nameValue: '',
    icValue: this.iceCreamFlavors && [this.iceCreamFlavors[0], this.iceCreamFlavors[1]]
  }

  constructor() {
    super();
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleIceCreamChange = this.handleIceCreamChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      nameValue: e.target.value.toUpperCase()
    });
  }

  handleIceCreamChange(e) {
    if (e.target.multiple) {
      // for a multi-select
      // selectedOptions is an Array-like collection. needs to be converted to an array to map.
      this.setState({
        icValue: Array.from(e.target.selectedOptions).map(o => o.value)
      });
    } else {
      // for a single select
      this.setState({
        icValue: e.target.value
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form className="main__form" onSubmit={this.handleSubmit}>
        <fieldset className="main__form-fieldset">
          <h1 className="main__form-fieldset__title">Toronto Real Estate</h1>
          {/* Neighborhood Searchbar */}
          <Tabs>
            <TabList>
              <Tab>Rent</Tab>
              <Tab>Sell</Tab>
            </TabList>

            {/* FOR RENT */}
            <TabPanel>
              <div>
                <h2>Apartments for rent in Toronto</h2>
                <p>Toronto apartments, condos, penthouses, brownstones and houses for rent.</p>
              </div>
              <div className="main__form-fieldset__neighbourhood-searchbar">
                <input className="main__form-input" name="name" type="text" placeholder="Neighborhood" value={this.state.nameValue} onChange={this.handleNameChange} />
              </div>

              <div className="main__form-fieldset__price-selector">
                <input className="main__form-input" name="name" type="text" placeholder="Neighborhood" value={this.state.nameValue} onChange={this.handleNameChange} />
                <input className="main__form-input" name="name" type="text" placeholder="Neighborhood" value={this.state.nameValue} onChange={this.handleNameChange} />
              </div>
              <div className="main__form-fieldset__beds-selector">
                <input className="main__form-input" name="name" type="text" placeholder="Neighborhood" value={this.state.nameValue} onChange={this.handleNameChange} />
              </div>
              <div className="main__form-fieldset__submit">
                <button className="main__form-fieldset__submit-button">Submit</button>
              </div>
            </TabPanel>

            {/* FOR SELL */}
            <TabPanel>
            <div>
                <h2>Apartments for sell in Toronto</h2>
                <p>Toronto apartments, condos, penthouses, brownstones and houses for rent.</p>
              </div>

              <div className="main__form-fieldset__neighbourhood-searchbar">
                <input className="main__form-input" name="name" type="text" placeholder="Neighborhood" value={this.state.nameValue} onChange={this.handleNameChange} />
              </div>

              <div className="main__form-fieldset__price-selector">
                <input className="main__form-input" name="name" type="text" placeholder="Neighborhood" value={this.state.nameValue} onChange={this.handleNameChange} />
                <input className="main__form-input" name="name" type="text" placeholder="Neighborhood" value={this.state.nameValue} onChange={this.handleNameChange} />
              </div>
              <div className="main__form-fieldset__beds-selector">
                <input className="main__form-input" name="name" type="text" placeholder="Neighborhood" value={this.state.nameValue} onChange={this.handleNameChange} />
              </div>
              <div className="main__form-fieldset__submit">
                <button className="main__form-fieldset__submit-button">Submit</button>
              </div>
            </TabPanel>

          </Tabs>
        </fieldset>
      </form>
    )
  }
}
export default Form;
