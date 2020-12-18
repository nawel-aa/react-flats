import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

class GoogleMap extends Component {
  constructor(props) {
    super(props);

    this.center = {
      lat: 48.888839,
      lng: 2.339208
    };
    this.zoom = 11;
  }

  render() {
    const { selectedFlat } = this.props;

    return (
      <div className="map-container">
        <GoogleMapReact
          defaultCenter={this.center}
          defaultZoom={this.zoom}
        >
          <Marker
            lat={selectedFlat.lat}
            lng={selectedFlat.lng}
            flat={selectedFlat}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;