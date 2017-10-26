import React, { Component } from 'react';
import _ from 'lodash';

import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);

    this.state = {
      options: []
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ( { options } ));
      }
    } catch (e) {
      // do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(option) {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((item) => item !== option )
      };
    });
  }

  handlePickOption() {
    const item = _.random(0, this.state.options.length - 1);
    const option = this.state.options[item];

    alert(option);
  }

  handleAddOption(option) {
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
  }

  render() {
    const subtitle = 'Put your decisions in the hands of this app :3';

    return (
      <div className="main">
        <Header subtitle={subtitle} />

        <Action
          handlePickOption={this.handlePickOption}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          handleDeleteOptions={this.handleDeleteOptions}
          options={this.state.options}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

export default App;
