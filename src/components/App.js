import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Indecision App</h1>
        <p>Put your decisions in the hands of this app :3</p>
      </div>
    );
  }
}

class Action extends Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Option extends Component {
  render() {
    return (
      <li>Nothing Bruh.</li>
    );
  }
}

class AddOption extends Component {
  render() {
    return (
      <button>Add an option</button>
    );
  }
}

class Options extends Component {
  render() {
    return (
      <div>
        <p>List of the things you have to do.</p>
        <ul>
          <Option />
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <p>This is a sample component</p>
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

export default App;
