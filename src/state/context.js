import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import reducer from "./reducer";

const CarStateContext = createContext();
const CarDispatchContext = createContext();

const useCarState = () => {
  const context = useContext(CarStateContext);
  if (!context) {
    throw Error("useCarState must be used inside CarProvider!");
  }
  return context;
};

const useCarDispatch = () => {
  const context = useContext(CarDispatchContext);
  if (!context) {
    throw Error("useCarDispatch must be used inside CarProvider!");
  }
  return context;
};

const initialState = {
  cars: []
};

const CarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CarStateContext.Provider value={state}>
      <CarDispatchContext.Provider value={dispatch}>
        {children}
      </CarDispatchContext.Provider>
    </CarStateContext.Provider>
  );
};

CarProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { useCarState, useCarDispatch, CarProvider };
