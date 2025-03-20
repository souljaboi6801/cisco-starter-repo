import React, { useState, useEffect } from "react";
import axios from "axios";

function IPAddress({ version }) {
  const [ip, setIp] = useState("Loading...");
  const apiUrl =
    version === "IPv6"
      ? "https://api64.ipify.org?format=json"
      : "https://api.ipify.org?format=json";

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setIp(response.data.ip);
      })
      .catch((error) => {
        setIp("Error fetching IP");
        console.error("IP fetch error:", error);
      });
  }, [apiUrl]);

  return (
    <div>
      <strong>{version} Address:</strong> {ip}
    </div>
  );
}

export default IPAddress;
