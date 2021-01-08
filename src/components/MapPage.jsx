import React from "react";
import { useState, useEffect } from 'react';
import MapGL, {Source, Layer} from 'react-map-gl';
import DropdownMenu from './DropdownMenu';

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
  const [zoomInState, setZoomInState] = useState("None");
  const [currentDataset, setCurrentDataset] = useState("2020 Election Result");

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
  }

  return (
    <div className="d-flex">
      <div style={{width:"17vw", height:"92vh", padding:"2rem"}}>
        <p style={{fontSize:"1.15rem", fontWeight:"bold"}}>Zoom into a state:</p>
        <DropdownMenu 
          selections={["None", "Indiana", "Washington", "California"]}
          currentSelection={zoomInState}
          changeSelection={changeZoomInState}
        />
        <p style={{fontSize:"1.15rem", fontWeight:"bold"}}>Select a Data Set<br /> to Compare With:</p>
        <DropdownMenu 
          selections={["2020 Election Result"]}
          currentSelection={currentDataset}
          changeSelection={changeCurrentDataset}
        />
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