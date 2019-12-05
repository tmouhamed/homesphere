import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import './Form.scss';

class Form extends React.Component {
  render() {
    return (
      <form className="main__form" onSubmit={this.handleSubmit}>
        <fieldset className="main__form-fieldset">
          <h1 className="main__form-fieldset__title">Toronto Real Estate</h1>
          <Tabs>
            <TabList>
              <Tab>Rent</Tab>
              <Tab>Buy</Tab>
            </TabList>

            {/* TAB PANEL FOR RENT */}
            <TabPanel>
              <div className="main__form-fieldset__titles">
                <h2 className="main__form-fieldset__titles-subtitle">Apartments for rent in Toronto</h2>
                <p className="main__form-fieldset__titles-description">Toronto apartments, condos, penthouses, brownstones and houses for rent.</p>
              </div>
              <div className="main__form-fieldset__searchform">
                <div>
                  <input className="main__form-fieldset__searchbar" name="name" type="text" placeholder="Neighborhood" />
                </div>
                <div className="main__form-fieldset__price-selector">
                  <input className="main__form-fieldset__price-selector-input" name="name" type="text" placeholder="$ Minimum" />
                  <input className="main__form-fieldset__price-selector-input" name="name" type="text" placeholder="$ Maximum" />
                </div>
                <div>
                  <input className="main__form-fieldset__beds-input" name="name" type="text" />
                </div>
                <div>
                  <button className="main__form-fieldset__submit-button">Submit</button>
                </div>
              </div>
            </TabPanel>

            {/* TAB PANEL FOR SELL */}
            <TabPanel>
              <div className="main__form-fieldset__titles">
                <h2 className="main__form-fieldset__titles-subtitle">Apartments for sell in Toronto</h2>
                <p className="main__form-fieldset__titles-description">Toronto apartments, condos, co-ops brownstones and houses for sale.</p>
              </div>
              <div className="main__form-fieldset__searchform">
                <div>
                  <input className="main__form-fieldset__searchbar" name="name" type="text" placeholder="Neighborhood" />
                </div>
                <div className="main__form-fieldset__price-selector">
                  <input className="main__form-fieldset__price-selector-input" name="name" type="text" placeholder="$ Minimum" />
                  <input className="main__form-fieldset__price-selector-input" name="name" type="text" placeholder="$ Maximum" />
                </div>
                <div>
                  <input className="main__form-fieldset__beds-input" name="name" type="text"/>
                </div>
                <div>
                  <button className="main__form-fieldset__submit-button">Submit</button>
                </div>
              </div>
            </TabPanel></Tabs>
        </fieldset>
      </form>
    )
  }
}
export default Form;
