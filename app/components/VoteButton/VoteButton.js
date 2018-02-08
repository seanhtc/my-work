import React, { PropTypes } from 'react';
import './style.scss';

const VoteButton = (props) => {
  return (
    <button 
      type="button" 
      className={ props.type === '1' ? "styleYes" : "styleNo" }
      onClick={props.onClickButton}
    >
      {props.label}
    </button>
  );
}

VoteButton.PropTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    onClickButton: PropTypes.func
};

export default VoteButton;