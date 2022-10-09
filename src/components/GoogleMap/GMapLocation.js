import { React, Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

class GMapLocation extends Component {
  render() {
    return (
      <div className="map-container">
        <Map
          google={this.props.google}
          zoom={this.props.zoom}
          initialCenter={{
            lat: this.props.lat,
            lng: this.props.lng,
          }}>
          <Marker
            title={this.props.locationTitle}
            name={this.props.name}
            position={{ lat: this.props.lat, lng: this.props.lng }}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCY6RSFWHiTu0IC83rCsER2dSSb3lmMyOs",
})(GMapLocation);
