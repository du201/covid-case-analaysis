import React from "react";
import { useState, useEffect } from 'react';
import MapGL, {Source, Layer} from 'react-map-gl';
// import DropdownMenu from './DropdownMenu';
import deepCopy from '../utilities/deepCopy.js';
import {Dropdown} from 'reactjs-dropdown-component';
import "../styles/MapPage.css";
import "../styles/DropdownMenu.css";

const MapPage = () => {
   // States for Mapbox
  const [viewport, setViewport] = useState({
    latitude: 40,
    longitude: -100,
    zoom: 3,
    bearing: 0,
    pitch: 0
  });
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [zoomInState, setZoomInState] = useState([
    {
        id: 0,
        title: 'Alabama',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 1,
        title: 'Alaska',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 2,
        title: 'Arizona',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 3,
        title: 'Arkansas',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 4,
        title: 'California',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 5,
        title: 'Colorado',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 6,
        title: 'Connecticut',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 7,
        title: 'Delaware',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 8,
        title: 'Florida',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 9,
        title: 'Georgia',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 10,
        title: 'Hawaii',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 11,
        title: 'Idaho',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 12,
        title: 'Illinois',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 13,
        title: 'Indiana',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 14,
        title: 'Iowa',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 15,
        title: 'Kansas',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 16,
        title: 'Kentucky',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 17,
        title: 'Louisiana',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 18,
        title: 'Maine',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 19,
        title: 'Maryland',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 20,
        title: 'Massachusetts',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 21,
        title: 'Michigan',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 22,
        title: 'Minnesota',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 23,
        title: 'Mississippi',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 24,
        title: 'Missouri',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 25,
        title: 'Montana',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 26,
        title: 'Nebraska',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 27,
        title: 'Nevada',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 28,
        title: 'New Hampshire',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 29,
        title: 'New Jersey',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 30,
        title: 'New Mexico',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 31,
        title: 'New York',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 32,
        title: 'North Carolina',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 33,
        title: 'North Dakota',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 34,
        title: 'Ohio',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 35,
        title: 'Oklahoma',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 36,
        title: 'Oregon',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 37,
        title: 'Pennsylvania',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 38,
        title: 'Rhode Island',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 39,
        title: 'South Carolina',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 40,
        title: 'South Dakota',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 41,
        title: 'Tennessee',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 42,
        title: 'Texas',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 43,
        title: 'Utah',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 44,
        title: 'Vermont',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 45,
        title: 'Virginia',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 46,
        title: 'Washington',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 47,
        title: 'West Virginia',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 48,
        title: 'Wisconsin',
        selected: false,
        key: 'zoomInState'
    },
    {
        id: 49,
        title: 'Wyoming',
        selected: false,
        key: 'zoomInState'
    }
  ]);
  const [currentDataset, setCurrentDataset] = useState([
    {
      id: 0,
      title: "2020 Election Result",
      selected: false,
      key: 'currentDataset'
    }
  ]);


  let changeZoomInState = newZoomInState => {
    setZoomInState(newZoomInState);
  };

  let changeCurrentDataset = newCurrentDataset => {
    setCurrentDataset(newCurrentDataset);
  }
  let onViewportChange = viewport => setViewport(viewport);

  let onHover = event => {
    const {
      features, // The features are all the map layers that the cursor is currently on. In this case, we only want the data layer
      srcEvent: {offsetX, offsetY}
    } = event;
    const hoveredFeature = features && features.find(f => f.layer.id === 'us-income-election'); // This is the data layer. It is null when the cursor is not on any data layer
    setHoveredFeature(hoveredFeature);
    setX(offsetX); // These will be the location for the tooltip
    setY(offsetY);
  };

  let renderTooltip = () => {
    console.log(hoveredFeature, x, y);
    return ( // The properties in hoveredFeature is the features in our GeoJson data
      hoveredFeature && (
        <div className="tooltip-on-map" style={{left: x, top: y}}>
          <div>State: {hoveredFeature.properties.name}</div> 
          <div>Median Household Income: {hoveredFeature.properties.value}</div>
          <div>Percentile: {(hoveredFeature.properties.percentile / 8) * 100}</div>
          <div>GOP: {hoveredFeature.properties.per_gop}</div>
          <div>DEM: {hoveredFeature.properties.per_dem}</div>
        </div>
      )
    );
  };

  /**
   * Used to modify the parent states from DropdownMenu children
   * @param {int} id: id of the selection being clicked
   * @param {string} key: the name of the soon-to-be modified state
   */
  let resetThenSet = (id, key) => {
    if (key === 'currentDataset') {
      let copy_currentDataset = deepCopy(currentDataset);
      copy_currentDataset.forEach((item) => item.selected = false);
      copy_currentDataset[id].selected = true;
      setCurrentDataset(copy_currentDataset);
    } else if (key === 'zoomInState') {
      let copy_zoomInState = deepCopy(zoomInState);
      copy_zoomInState.forEach((item) => item.selected = false);
      copy_zoomInState[id].selected = true;
      setZoomInState(copy_zoomInState);
    }
  };

  return (
    <div className="d-flex">
      <div style={{width:"17vw", height:"92vh", padding:"2rem"}}>
        <p className="dropdown-title-above">Select a Data Set<br /> to Compare With:</p>
        <Dropdown
          title="2020 Election Result"
          list={currentDataset}
          resetThenSet={resetThenSet}
        />
        <hr style={{borderTop: '1.5px solid #bbb', margin: '2rem 0rem'}}></hr>
        <p className="dropdown-title-above">Zoom into a state:</p>
        {/* <DropdownMenu 
          title="Select state"
          list={zoomInState}
          resetThenSet={resetThenSet}
        /> */}
        <Dropdown
          searchable={["Search for state", "No matching state"]}
          title="Select state"
          list={zoomInState}
          resetThenSet={resetThenSet}
        />
        {/* <DropdownMenu 
          selections={["2020 Election Result"]}
          currentSelection={currentDataset}
          changeSelection={changeCurrentDataset}
        /> */}
      </div>
      <MapGL
        {...viewport}
        width="83vw"
        height="92vh"
        // mapStyle="mapbox://styles/mapbox/light-v9"
        mapStyle="mapbox://styles/du201/ckj4vp7a72eu019lj3ivhvbz8"
        onViewportChange={onViewportChange}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onHover={onHover}
      >
        {renderTooltip()}
      </MapGL>
    </div>
  );
};

export default MapPage;