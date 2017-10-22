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

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
};

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePickOption}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );
};

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

const Options = (props) => {
  return (
    <div>
      <p>List of the things you have to do.</p>
      <ul>
        {
          props.options.map((option, index) => <Option option={option} key={index} />)
        }
      </ul>
      <button onClick={props.handleDeleteOptions}>Remove all</button>
    </div>
  );
};

const Option = (props) => {
  return (
    <li>{props.option}</li>
  );
};

export default App;
