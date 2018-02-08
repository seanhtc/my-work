import React, { Component, PropTypes } from 'react';
import PollCover from './pollCover/pollCover';
import ListingItem from './listingitem/listingitem';
import './style.scss';

class PollListing extends Component {
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
    const { pollsData, onClickItem } = this.props;
    const coverTitle = pollsData.polls[0].title;

    return (
      <div className="listing">
        <PollCover titleText={coverTitle} onClickItem={onClickItem} />
        <ListingItem itemData={pollsData} />
      </div>
    );
  }
}

export default PollListing;