import React, { PropTypes } from 'react';
import './style.scss';

const VoteButton = (props) => {
  return (
    <button 
      type="button" 
      className={ props.type === '1' ? "styleYes" : "styleNo" }
    >
      {props.label}
    </button>
  );
}

VoteButton.PropTypes = {
    label: PropTypes.string,
    type: PropTypes.string
};

export default VoteButton;