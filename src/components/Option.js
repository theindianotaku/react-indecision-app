import React from 'react';

const Option = (props) => (
  <li>
    {props.option}
    <button
      className="button button--link"
      onClick={() => {
        props.handleDeleteOption(props.option);
      }}
    >
      Remove
    </button>
  </li>
);

export default Option;
