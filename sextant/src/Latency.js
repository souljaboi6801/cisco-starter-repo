import React, { useState, useEffect } from "react";

function Latency() {
  const [latency, setLatency] = useState("Connecting...");

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:55455");

    ws.onmessage = (event) => {
      const packetTimestamp = parseInt(event.data, 10);
      const currentTime = Date.now();
      const calculatedLatency = currentTime - packetTimestamp;
      setLatency(`${calculatedLatency} ms`);
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
      setLatency("Error receiving latency data");
    };

    ws.onclose = () => {
      setLatency("Disconnected");
    };

    return () => ws.close();
  }, []);

  return (
    <div>
      <strong>Latency:</strong> {latency}
    </div>
  );
}

export default Latency;
