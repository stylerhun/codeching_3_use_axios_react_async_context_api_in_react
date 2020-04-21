import React from "react";
import "./App.css";
import { CarProvider } from "./state/context";
import CarList from "./view/CarList";

const App = () => {
  return (
    <CarProvider>
      <CarList />
    </CarProvider>
  );
};

export default App;
