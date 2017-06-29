import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Loading from './Loading';
import SideBar from './SideBar';
import Content from './Content';
import GoogleMap from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div style={{
    display: 'block',
      position: 'absolute',
      width: '30px',
      height: '30px',
      margin: 0,
      background: 'red',
      borderRadius: '20px'
    }}>
    {text}
  </div>
);

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    };
  }
  // componentDidMount(){
  //   setTimeout(() => { 
  //     this.setState({
  //       loading: false,
  //     })
  //   }, 2000);
  // }

  render() {
    const center = [21.03, 105.85];
    const zoom = 14;
    return (
      <div className="App" 
      style={{
          width: '1000px',
          height: '1000px'
        }}> 
       <GoogleMap
        bootstrapURLKeys={{
            key: "AIzaSyDrO0bvigKVL-sEOWCaeEfqgQtdecDG1dc"
        }}
        center={center}
        zoom={zoom}
        defaultCenter={center}
        layerTypes={['TrafficLayer', 'TransitLayer']}
        >
        <AnyReactComponent lat={21.03} lng={105.85} text={'Xom Pho'} /* Kreyser Avrora */ />
      </GoogleMap>       
      </div>
    );
  }
}

export default App;
