import React, { Component } from 'react';



class Header extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}+" hi"</h1>
        <p>{this.props.subtitle}</p>
      </div>
    );
  }
}

class Action extends Component {
  handleClick() {
    alert('handle click');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>What should I do?</button>
      </div>
    );
  }
}

class AddOption extends Component {
  handleOnSubmit(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    if (option) {
      alert(option);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name="option" />
          <button type="submit">Add Option</button>
        </form>
      </div>
    );
  }
}

class Options extends Component {
  handleRemoveAll() {
    alert('remove all');
  }

  render() {
    return (
      <div>
        <p>List of the things you have to do.</p>
        <ul>
          {
            this.props.options.map((option, index) => <Option option={option} key={index} />)
          }
        </ul>
        <button onClick={this.handleRemoveAll}>Remove all</button>
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

class App extends Component {
  render() {
    const title = "Indecision App";
    const subtitle = "Put your decisions in the hands of this app :3";
    const options = ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4'];

    return (
      <div className="main">
        <Header title={title} subtitle={subtitle} />
        <p>This is a sample component</p>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  }
}

export default App;
