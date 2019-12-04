import React from 'react';
import './FilterSearch.scss';


class FilterSearch extends React.Component {
    constructor() {
        super();
        this.handleGeneric = this.handleGeneric.bind(this);
    }
    state = {
        searchValue: [],
        propertyType: ' ',
        category: '',
        bed: '',
        bath: '',
        price: []
    }
    handleGeneric(e, name) {
        this.setState({
            [name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.searchFunc();
    }
    render() {
        return (
            <>
                <form className="search__form" onSubmit={this.handleSubmit}>
                    <div className="search__form-search">
                        <input className="search__form-search__input" name="name" type="text" value={this.state.searchValu} onChange={this.handleGeneric} />
                        <button className="search__form-search__button">Search</button>
                    </div>
                    <select name="property" className="search__form-select" required onChange={this.handleGeneric}>
                        <option data-display="Property Type">Property Type</option>
                        <option value="House">House</option>
                        <option value="Townhouse">Townhouse</option>
                        <option value="Condo">Condo</option>

                    </select>
                    <select name="category" className="search__form-select" onChange={this.handleGeneric}>
                        <option data-display="category">Category</option>
                        <option value="Rent">Rent</option>
                        <option value="Sell">Sell</option>
                    </select>
                    <select name="bedroom" className="search__form-select" onChange={this.handleGeneric}>
                        <option data-display="Bedrooms">Bedrooms</option>
                        <option value="1">1BR</option>
                        <option value="2">2BR</option>
                        <option value="3">3BR</option>
                        <option value="4">4BR</option>
                    </select>
                    <select name="bathroom" className="search__form-select" onChange={this.handleGeneric}>
                        <option data-display="Bath">Bath</option>
                        <option value="1">1Ba</option>
                        <option value="2">2Ba</option>
                        <option value="3">3Ba</option>
                        <option value="4">4Ba</option>
                    </select>
                    <select name="price" className="search__form-select" onChange={this.handleGeneric}>
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