import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import './Form.scss';
import { Link } from 'react-router-dom';
class Form extends React.Component {
  handleSubmit = () => {
    this.props.filterProperty()
  }
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
                <select className="main__form-fieldset__searchbar" name="propertyType" onChange={this.props.handleGeneric}>
                  <option data-display="Property Type">Property Type</option>
                  <option value="House">House</option>
                  <option value="Townhouse">Townhouse</option>
                  <option value="Condo">Condo</option>
                </select>
                <div className="main__form-fieldset__price-selector">
                  <input className="main__form-fieldset__price-selector-input" name="minPrice" type="text" placeholder="$ Minimum" onChange={this.props.handleGeneric} />
                  <input className="main__form-fieldset__price-selector-input" name="maxPrice" type="text" placeholder="$ Maximum" onChange={this.props.handleGeneric} />
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
                  <select className="main__form-fieldset__searchbar" name="propertyType" onChange={this.props.handleGeneric}>
                    <option data-display="Property Type">Property Type</option>
                    <option value="House">House</option>
                    <option value="Townhouse">Townhouse</option>
                    <option value="Condo">Condo</option>
                  </select>
                </div>
                <div>
                  <select name="category" className="search__form-select" onChange={this.props.handleGeneric}>
                    <option data-display="category">Category</option>
                    <option value="For Rent">Rent</option>
                    <option value="For Sale">Buy</option>
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
