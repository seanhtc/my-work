import React, { Component, PropTypes } from 'react';
import VoteButton from '../../votebutton/votebutton';
import './style.scss';

class PollCover extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickYes = this.handleClickYes.bind(this);
    this.handleClickNo = this.handleClickNo.bind(this);
    this.state = {
      totalNumber: 182
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {

  }

  handleClickYes () {
    this.setState({
      totalNumber: this.state.totalNumber + 1
    })
  }

  handleClickNo () {
    this.setState({
      totalNumber: this.state.totalNumber - 1
    })
  }

  handleClick (event) {
    const { onClickItem } = this.props;
    typeof onClickItem === 'function' && onClickItem(event);
  }

  render() {
    const { titleText, onClickItem } = this.props;
    const { totalNumber } = this.state;

    console.log(onClickItem)

    return (
      <div className="cover" onClick={this.handleClick}>
        <article>
          <div className="clearfix">
            <div className="leftColumn">
              <h1>Today's Poll</h1>
              <p>{titleText}</p>
              <div className="optionalBox">
                <VoteButton label="Yes" type="1" onClick={this.handleClickYes} />
                <VoteButton label="no" type="0" onClick={this.handleClickYes} />
              </div>
            </div>
            <div className="rightColumn">
              <p>Charts</p>
            </div>
          </div>
          <div className="totalNumber">
            <p>Total Number of vote records {totalNumber}</p>
          </div>
        </article>
      </div>
    );
  }
}

PollCover.PropTypes = {
    onClickItem: PropTypes.func,
    titleText: PropTypes.string
};

export default PollCover;