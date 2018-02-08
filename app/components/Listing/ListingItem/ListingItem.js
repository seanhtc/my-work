import React, { Component } from 'react';
import './style.scss'

class ListingItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { itemData } = this.props;
    const itemDataDetail = itemData.polls;
    const listItems = itemDataDetail.map((number, index) =>
      <li key={index}>
        <div class="itemHolder">
          <a href="javascript:;">
            <div class="thumbnail">Static Image</div>
            <div class="description">
              <p>{ number.publishedDate }</p>
                { number.title }
            </div>
          </a>
        </div>
      </li>
    );
    const convertData = listItems.slice(1, 5);

    return (
      <div>
        <ul className="item">
          { convertData }
        </ul>
      </div>
    );
  }
}

export default ListingItem;