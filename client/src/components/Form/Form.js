import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import './Form.scss';
import { Link } from 'react-router-dom';
class Form extends React.Component {
  handleSubmit = () => {
    this.props.filterProperty()
  }
  test = () => {
    this.props.tabIndexCheck()
  }
  render() {
    return (
      <form className="main__form" onSubmit={this.props.filterProperty}>
        <fieldset className="main__form-fieldset">
          <h1 className="main__form-fieldset__title">Toronto Real Estate</h1>
          <Tabs selectedIndex={this.props.tabIndex} onSelect={this.test}>
            <TabList>
              <Tab>Rent</Tab>
              <Tab>Buy</Tab>
            </TabList>

            {/* TAB PANEL FOR RENT */}
            <TabPanel>
              <div className="main__form-fieldset__titles">
                <h2 className="main__form-fieldset__titles-subtitle">Apartments for rent in Toronto</h2>
                <p className="main__form-fieldset__titles-description">Toronto apartments, condos, penthouses and houses for rent.</p>
              </div>

              <div className="main__form-fieldset__searchform">
                <div>
                  <select className="main__form-fieldset__searchbar" name="propertyType" onChange={this.props.handleGeneric}>
                    <option data-display="Property Type">Property Type</option>
                    <option value="House">House</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Condo">Condo</option>
                  </select>
                </div>
                <div className="main__form-fieldset__price-selector">
                  <input className="main__form-fieldset__price-selector-input" name="minPrice" type="text" placeholder="$ Minimum" onChange={this.props.handleGeneric} />
                  <input className="main__form-fieldset__price-selector-input" name="maxPrice" type="text" placeholder="$ Maximum" onChange={this.props.handleGeneric} />
                </div>
                <div>

                  <Link
                    to={{
                      pathname: "/properties",
                      search: "?sort=name",
                      hash: "#the-hash",
                      state: { fromDashboard: true }
                    }}>
                    <button className="main__form-fieldset__submit-button" type="submit">Submit</button>
                  </Link>
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
                  <select className="main__form-fieldset__searchbar" name="propertyType" onChange={this.props.handleGeneric}>
                    <option data-display="Property Type">Property Type</option>
                    <option value="House">House</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Condo">Condo</option>
                  </select>
                </div>
                <div className="main__form-fieldset__price-selector">
                  <input className="main__form-fieldset__price-selector-input" name="minPrice" type="text" placeholder="$ Minimum" onChange={this.props.handleGeneric} />
                  <input className="main__form-fieldset__price-selector-input" name="maxPrice" type="text" placeholder="$ Maximum" onChange={this.props.handleGeneric} />
                </div>
                <div>

                  <Link
                    to={{
                      pathname: "/properties",
                      search: "?sort=name",
                      hash: "#the-hash",
                      state: { fromDashboard: true }
                    }}>
                    <button className="main__form-fieldset__submit-button" type="submit">Submit</button>
                  </Link>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </fieldset>
      </form>
    )
  }
}
export default Form;
