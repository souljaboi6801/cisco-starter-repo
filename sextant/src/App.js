import React from "react";
import Banner from "./Banner";
import Exhibit from "./Exhibit";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="dashboard">
        <Exhibit title="Public IP Address">
          <p>Fetching IP...</p>
        </Exhibit>
        <Exhibit title="Latency Metrics">
          <p>Loading latency data...</p>
        </Exhibit>
      </div>
    </div>
  );
}

export default App;
