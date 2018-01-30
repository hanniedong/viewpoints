// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import axios from 'axios';

// export default class GoogleMap extends Component {

//   constructor(props) {
//     super(props);

//     const {lat, lng} = this.props.initialCenter;
//     this.state = {
//       currentLocation: {
//         lat: lat,
//         lng: lng
//       },
//       map: {}
//     }
//     this.loadMap = this.loadMap.bind(this)
//   }

//   componentDidMount() {
//     this.loadMap();
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.google !== this.props.google) {
//       this.loadMap();
//     }
//   }


//   loadMap() {
//     if (this.props && this.props.google) {
//       // google is available
//       const {google} = this.props;
//       const maps = google.maps;

//       const mapRef = this.refs.map;
//       const node = ReactDOM.findDOMNode(mapRef);

//       let {initialCenter, zoom} = this.props;
//       const {lat, lng} = initialCenter;
//       const center = new maps.LatLng(lat, lng);
//       const mapConfig = {
//         center: center,
//         zoom: zoom
//       }
//       this.map =  new maps.Map(node, mapConfig);
      
//     }
//     this.forceUpdate.bind(this)
//   }

//   renderChildren() {
//     const {children} = this.props;
//     if (!children) return;
//     return React.Children.map(children, c => {
//       return React.cloneElement(c, {
//         map: this.props.map,
//         zoom: this.props.zoom,
//         google: this.props.google,
//         mapCenter: this.state.currentLocation
//       });
//     })
//   }

//   render() {
//     const style = {
//       width: '100vw',
//       height: '100vh',
//     }
//     return (
//       <div ref='map' style= {style}>
//         Loading map...
//         {this.renderChildren()}
//       </div>
//     )
//   }
// }
// GoogleMap.propTypes = {
//   google: PropTypes.object,
//   zoom: PropTypes.number,
//   initialCenter: PropTypes.object,
// }

// GoogleMap.defaultProps = {
//   zoom: 13,
//   // San Francisco, by default
//   initialCenter: {
//     lat: 37.774929,
//     lng: -122.419416
//   }
// }