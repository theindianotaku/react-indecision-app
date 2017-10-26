import React from 'react';
const Header = (props) => {
  return (
    <div>
      <h1>{ props.title }</h1>
      { props.subtitle && <p>{ props.subtitle }</p>}
    </div>
  );
};

Header.defaultProps = {
  title: 'The Indecision App'
};

export default Header;
