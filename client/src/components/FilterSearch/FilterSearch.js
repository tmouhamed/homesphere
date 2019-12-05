import React from 'react';
import './FilterSearch.scss';

class FilterSearch extends React.Component {
    render() {
        return (
            <>
                <form className="search__form" onSubmit={this.props.filterProperty}>
                    <select className="search__form-select" name="propertyType" onChange={this.props.handleGeneric}>
                        <option data-display="Property Type">Property Type</option>
                        <option value="House">House</option>
                        <option value="Townhouse">Townhouse</option>
                        <option value="Condo">Condo</option>

                    </select>
                    <select name="category" className="search__form-select" onChange={this.props.handleGeneric}>
                        <option data-display="category">Category</option>
                        <option value="For Rent">Rent</option>
                        <option value="For Sell">Sell</option>
                    </select>
                    <select name="bed" className="search__form-select" onChange={this.props.handleGeneric}>
                        <option data-display="Bedrooms">Bedrooms</option>
                        <option value="1">1BR</option>
                        <option value="2">2BR</option>
                        <option value="3">3BR</option>
                        <option value="4">4BR</option>
                    </select>
                    <select name="bath" className="search__form-select" onChange={this.props.handleGeneric}>
                        <option data-display="Bath">Bath</option>
                        <option value="1">1Ba</option>
                        <option value="2">2Ba</option>
                        <option value="3">3Ba</option>
                        <option value="4">4Ba</option>
                    </select>
                    <select name="price" className="search__form-select" onChange={this.props.handleGeneric}>
                        <option data-display="Bedrooms">Price</option>
                        <option value="$500">$500</option>
                        <option value="$1000">$1000</option>
                        <option value="$1200">$1200</option>
                        <option value="$1500">$1500</option>
                    </select>
                    <button className='search__form-submit' type="submit">Search Properties</button>
                </form>

            </>
        );
    }
}
export default FilterSearch;