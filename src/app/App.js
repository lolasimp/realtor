import React, { Component } from 'react';
import './App.css';

import connection from '../firebaseRequests/connection';

import listingRequests from '../firebaseRequests/listings';
import Listings from '../components/Listings/Listings';
import Building from '../components/Building/Building';
import ListingForm from '../components/ListingForm/ListingForm';

class App extends Component {
  state = {
    listings: [],
    selectedListeningId: -1,
  }

  listingSelect = (id) => {
    this.setState({
      selectedListeningId: id,
    });
  }

  componentDidMount () {
    connection ();
    listingRequests.getRequest()
      .then((listings) => {
        this.setState({listings});
      })
      .catch((err) => {
        console.error('error with listing GET', err);
      });
  }

  render () {
    return (
      <div className="App">
        <div className="col-sm-6">
          <Listings
            listings = {this.state.listings}
            onListingSelection = {this.listingSelect}
          />
        </div>
        <div className="col-sm-6">
          <Building />
        </div>
        <div className="col-sm-12">
          <ListingForm />
        </div>
      </div>
    );
  }
}

export default App;
