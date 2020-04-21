import React, { Fragment } from "react";
import { useCarState, useCarDispatch } from "../state/context";
import { getCars } from "../state/actions";
import { useAsync } from "react-async";

const CarList = () => {
  const { cars } = useCarState();
  const dispatch = useCarDispatch();

  const { isLoading } = useAsync({ promiseFn: getCars, dispatch });

  if (isLoading) return <Fragment>Loading...</Fragment>;

  return (
    <div className="App">
      This is the car list which is coming from the backend test:
      <div className="car-list">
        {cars.map(car => {
          return (
            <div key={car.name}>
              <b>{car.name}</b>, color: {car.color}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarList;
