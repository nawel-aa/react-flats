import React, { Component } from 'react';
import flats from '../../data/flats';
import FlatList from './flat_list';
import GoogleMap from './google_map';

class App extends Component {
  constructor(props) {
    super(props);

    this.flats = flats;
    this.state = {
      selectedFlat: ""
    };
  }

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: flat
    });
  }

  render() {
    const { selectedFlat } = this.state;

    return (
      <div>
        <FlatList flats={this.flats} selectFlat={this.selectFlat} selectedFlat={selectedFlat} />
        <GoogleMap selectedFlat={selectedFlat} />
      </div>
    );
  }
}

export default App;
