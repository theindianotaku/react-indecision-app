import React, { Component } from 'react';
import _ from 'lodash';

import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

class App extends Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleClearSelected = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };

  handleDeleteOption = (option) => {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((item) => item !== option )
      };
    });
  };

  handlePickOption = () => {
    const item = _.random(0, this.state.options.length - 1);
    const option = this.state.options[item];

    this.setState(() => ({
      selectedOption: option
    }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  };

  componentDidMount = () => {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ( { options } ));
      }
    } catch (e) {
      // do nothing
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  };

  render() {
    const subtitle = 'Put your decisions in the hands of this app :3';

    return (
      <div className="main">
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            handlePickOption={this.handlePickOption}
            hasOptions={this.state.options.length > 0}
          />
          <div className="widget">
            <Options
              handleDeleteOptions={this.handleDeleteOptions}
              options={this.state.options}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelected={this.handleClearSelected}
        ></OptionModal>
      </div>
    );
  }
}

export default App;
