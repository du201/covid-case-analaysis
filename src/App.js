import * as React from 'react';
import { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import "./App.css";
import MapPage from "./components/MapPage";
import AnalysisPage from './components/AnalysisPage.jsx';
import AboutPage from './components/AboutPage.jsx';
import logoblue from './images/logoblue.svg';
import ContactPage from './components/ContactPage';

const US_MAP_PAGE = "USMapPage";
const DATA_ANALYSIS_PAGE = "DataAnalysisPage";
const ABOUT_PAGE = "AboutPage";
const CONTACT_PAGE = "ContactPage";

function App() {
  const [currentPage, setCurrentPage] = useState(US_MAP_PAGE); // We have "US_MAP_PAGE" and "DATA_ANALYSIS_PAGE"
  // console.log(currentPage);
  // console.log(currentPage === US_MAP_PAGE ? "nav-bottom-highlight" : null);
  // Source is the data source
  // Layer specifies how the website is going to render our map (data source)
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ height: "8vh" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ fontSize: "1.25rem" }}><span style={{ fontSize: "2.5rem" }}>US</span> Covid-19 Analysis
            <img className="logo-blue" src={logoblue} alt="logoblue" />
          </a>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={"nav-link nav-text" + (currentPage === US_MAP_PAGE ? " nav-bottom-highlight" : "")} onClick={() => setCurrentPage(US_MAP_PAGE)} to="/">U.S. Map</Link>
                {/* <div className="nav-underline"></div> */}
              </li>
              <li className="nav-item">
                <Link className={"nav-link nav-text" + (currentPage === DATA_ANALYSIS_PAGE ? " nav-bottom-highlight" : "")} onClick={() => setCurrentPage(DATA_ANALYSIS_PAGE)} to="/analysis">Data Analysis</Link>
              </li>
              <li className="nav-item">
                <div className="navbar-division-line"></div>
              </li>
              <li className="nav-item">
                <Link className={"nav-link nav-text" + (currentPage === ABOUT_PAGE ? " nav-bottom-highlight" : "")} onClick={() => setCurrentPage(ABOUT_PAGE)} to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className={"nav-link nav-text" + (currentPage === CONTACT_PAGE ? " nav-bottom-highlight" : "")} onClick={() => setCurrentPage(CONTACT_PAGE)} to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-text" href="https://github.com/du201/covid-case-analaysis" target="_blank">Source</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        <Route path="/analysis" render={(props) => <AnalysisPage {...props}></AnalysisPage>}></Route>
        <Route path="/about" render={(props) => <AboutPage {...props}></AboutPage>}></Route>
        <Route path="/contact" render={(props) => <ContactPage {...props}></ContactPage>}></Route>
        <Route path="/" render={(props) => <MapPage {...props}></MapPage>}></Route>
      </Switch>

    </React.Fragment>
  );
}

export default App;
