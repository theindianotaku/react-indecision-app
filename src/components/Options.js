import React from 'react';

import Option from './Option';

const Options = (props) => (
  <div>
    <p>List of the things you have to do.</p>
    { props.options.length === 0 && <p>Please add an option to get started</p>}
    <ul>
      {
        props.options.map((option, index) => (
          <Option
            option={option}
            key={index}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </ul>
    <button onClick={props.handleDeleteOptions}>Remove all</button>
  </div>
);

export default Options;
