import React from 'react';
import PropTypes from 'prop-types';

import {listingShape} from '../../propz/listingProp';
import './Listings.css';

// const listingShape = PropTypes.shape({
//   address: PropTypes.string.isRequired,
//   city: PropTypes.string.isRequired,
//   state: PropTypes.string.isRequired,
//   zip: PropTypes.number.isRequired,
//   squareFootage: PropTypes.number.isRequired,
//   price: PropTypes.number.isRequired,
//   numBeds: PropTypes.number.isRequired,
//   numBaths: PropTypes.number.isRequired,
//   description: PropTypes.string.isRequired,
//   estimatedMonthlyMorgage: PropTypes.number.isRequired,
//   lotInAcres: PropTypes.number.isRequired,
//   yearBuilt: PropTypes.number.isRequired,
//   heating: PropTypes.string.isRequired,
//   cooling: PropTypes.string.isRequired,
//   imageUrl: PropTypes.string.isRequired,
// });

class Listings extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(listingShape),
  }
  render () {
    const {listings} = this.props;
    const listingsItemComponents = listings.map((listing) => {
      return (
        <li key={listing.id}>{listing.price}</li>
      );
    });
    return (
      <div className = "Listings">
        <h2>Listings</h2>
        <ul>
          {listingsItemComponents}
        </ul>
      </div>
    );
  }
}

export default Listings;
