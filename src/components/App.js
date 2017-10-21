import React, { Component } from 'react';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      options: []
    };
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
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

    this.setState((state) => {
      let prevState = state;
      prevState.options.push(option);
      return {
        options: prevState.options
      };
    });
  }

  render() {
    const title = 'Indecision App';
    const subtitle = 'Put your decisions in the hands of this app :3';

    return (
      <div className="main">
        <Header title={title} subtitle={subtitle} />
        <p>This is a sample component</p>
        <Action
          handlePickOption={this.handlePickOption}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          handleDeleteOptions={this.handleDeleteOptions}
          options={this.state.options}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </div>
    );
  }
}

class Action extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePickOption}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}

class AddOption extends Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);

    this.state = {
      error: undefined
    };
  }

  handleOnSubmit(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return {
        error
      };
    });

    e.target.elements.option.value = '';
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name="option" />
          <button type="submit">Add Option</button>
        </form>
      </div>
    );
  }
}

class Options extends Component {
  render() {
    return (
      <div>
        <p>List of the things you have to do.</p>
        <ul>
          {
            this.props.options.map((option, index) => <Option option={option} key={index} />)
          }
        </ul>
        <button onClick={this.props.handleDeleteOptions}>Remove all</button>
      </div>
    );
  }
}

class Option extends Component {
  render() {
    return (
      <li>{this.props.option}</li>
    );
  }
}

export default App;
