import React from "react";
import Banner from "./Banner";
import Exhibit from "./Exhibit";
import IPAddress from "./IPAddress";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="dashboard">
        <Exhibit title="Public IPv4 Address">
          <IPAddress version="IPv4" />
        </Exhibit>
        <Exhibit title="Public IPv6 Address">
          <IPAddress version="IPv6" />
        </Exhibit>
      </div>
    </div>
  );
}

export default App;
