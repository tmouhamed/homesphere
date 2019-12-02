import React from 'react';
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
      <form className="bstn-flex bstn-flex-col main__form" onSubmit={this.handleSubmit}>
        <fieldset className="bstn-my-4 bstn-p-8 bstn-flex bstn-flex-col bstn-border-4 bstn-border-solid bstn-border-grey-300">
          <label className="bstn-mb-4 bstn-type-body-large">
            Name:
          </label>
          <input
            className="bstn-input-text"
            name="name"
            type="text"
            value={this.state.nameValue}
            onChange={this.handleNameChange} />
        </fieldset>
        <fieldset className="bstn-my-4 bstn-p-8 bstn-flex bstn-flex-col bstn-border-4 bstn-border-solid bstn-border-grey-300">
          <label className="bstn-mb-4 bstn-type-body-large">
            Select a flavor you like:
          </label>
          <select
            // value={this.state.icValue}
            name="icecream"
            onChange={this.handleIceCreamChange}
            multiple={true}>
            {
              this.iceCreamFlavors.map(f => <option key={f} value={f}>{f}</option>)
            }
          </select>
        </fieldset>
      </form>
    )
  }
}
export default Form;
