import React from 'react';

import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <p>Your Options</p>
      <button
        className="button button--link" onClick={props.handleDeleteOptions}
      >Remove all</button>
    </div>
    { props.options.length === 0 && <p className="widget__message">Please add an option to get started</p>}
    <div>
      {
        props.options.map((option, index) => (
          <Option
            option={option}
            key={index}
            count={index}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  </div>
);

export default Options;
