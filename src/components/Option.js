import React from 'react';

const Option = (props) => (
  <li>
    {props.option}
    <button
      onClick={() => {
        props.handleDeleteOption(props.option);
      }}
    >
      X
    </button>
  </li>
);

export default Option;
