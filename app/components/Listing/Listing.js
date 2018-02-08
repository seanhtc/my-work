import React, { Component, PropTypes } from 'react';
import PollCover from './pollCover/pollCover';
import ListingItem from './listingitem/listingitem';

class Listing extends Component {
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
    const { pollsData } = this.props;
    const coverTitle = pollsData.polls[0].title;

    return (
      <div className="listing">
        <PollCover titleText={coverTitle} />
        <ListingItem itemData={pollsData} />
      </div>
    );
  }
}

export default Listing;