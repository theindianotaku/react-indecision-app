import React from 'react';

const Action = (props) => (
  <div>
    <button
      onClick={props.handlePickOption}
      disabled={!props.hasOptions}
      className="big-button"
    >
      What should I do?
    </button>
  </div>
);

export default Action;
