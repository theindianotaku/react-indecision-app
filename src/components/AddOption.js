import React, { Component } from 'react';

class AddOption extends Component {
  state = {
    error: undefined
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleOnSubmit}>
          <input className="add-option__input"  type="text" name="option" placeholder="Fill your options here.." />
          <button className="button" type="submit">Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
