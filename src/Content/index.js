import React from 'react';
import 'whatwg-fetch';
import GoogleMap from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div style={{
    display: 'block',
            position: 'absolute',
            width: '50px',
            height: '50px',
            margin: 0,
            background: 'red',
  }}>
    {text}
  </div>
);
class Content extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const center = [59.938043, 30.337157];
    const zoom = 9;
    console.log(center);
    return (
      <div style={{
          width: '1000px',
          height: '1000px'
        }}>
       <GoogleMap
        bootstrapURLKeys={{
            key: "AIzaSyDrO0bvigKVL-sEOWCaeEfqgQtdecDG1dc"
        }}
        center={this.props.center}
        zoom={this.props.zoom}
        >
        <AnyReactComponent lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
      </GoogleMap>
      </div>
    );
  }
}
export default Content;