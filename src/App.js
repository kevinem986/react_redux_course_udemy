import React from "react";
import "./assets/css/custom.css";
import ComponentA from "./components/ComponentA";
export const NameContext = React.createContext();

function App() {
  return (
    <div className="App">
      <NameContext.Provider value={"Smith"}>
        <ComponentA />
      </NameContext.Provider>
    </div>
  );
}

export default App;
