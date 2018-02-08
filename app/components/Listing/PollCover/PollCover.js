import React, { Component, PropTypes } from 'react';
import VoteButton from '../../votebutton/votebutton';
import './style.scss';

class PollCover extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {

  }

  render() {
    const { titleText } = this.props;

    return (
      <div className="cover">
        <article>
          <div className="leftColumn">
            <h1>Today's Poll</h1>
            <p>{titleText}</p>
            <div className="optionalBox">
              <VoteButton label="Yes" type="1" />
              <VoteButton label="no" type="0" />
            </div>
          </div>
          <div className="rightColumn">
            <h1>Charts</h1>
          </div>
        </article>
      </div>
    );
  }
}

VoteButton.PropTypes = {
    titleText: PropTypes.string
};

export default PollCover;