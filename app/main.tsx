import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>PrismCheckpoint</h1>
      <p>Application is running.</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
