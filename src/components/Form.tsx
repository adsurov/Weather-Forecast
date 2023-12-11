import React, { useDebugValue, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";

import {
  LAT,
  LON,
} from '../Redux/actions'


type FormProps = {
  onLatChange: (number: number) => void;
  onLonChange: (number: number) => void;
  apiCall: () => void;
  updateMapData: (array: [number, number]) => void;
};

export default function Form(props: FormProps) {
  const dispatch = useAppDispatch();
	const inputLat = useAppSelector((state) => state.inputLatitude);
  const inputLon = useAppSelector((state) => state.inputLongitude);
  const { onLatChange, onLonChange, apiCall, updateMapData } = props;

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };


  const changeLatHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: LAT,
      payload: event.target.value,
    });
    onLatChange(parseCoordinate(event.target.value));
  };

  const changeLonHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: LON,
      payload: event.target.value,
    });
    onLonChange(parseCoordinate(event.target.value));
  };

  return (
    <>
      <form className="flex flex-col " onSubmit={submitHandler}>
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col w-[47.5%]">
            <label className=" text-white " htmlFor="lat">
              Широта
            </label>
            <input
              className="px-3 py-1 border rounded-md"
              type="number"
              id="lat"
              placeholder="Введите широту"
              value={inputLat}
              onChange={changeLatHandler}
            />
          </div>
          <div className="flex flex-col w-[47.5%]">
            <label className=" text-white " htmlFor="lon">
              Долгота
            </label>
            <input
              className="px-3 py-1 border rounded-md"
              type="number"
              id="lon"
              placeholder="Введите долготу"
              value={inputLon}
              onChange={changeLonHandler}
            />
          </div>
        </div>
        <button
          type="button"
          className=" border px-5 py-1 mt-3 text-white font-bold rounded-md"
          onClick={() => {
            apiCall();
          }}
        >
          Подтвердить
        </button>
      </form>
    </>
  );
}

export function parseCoordinate(string: string): number {
  const result = parseFloat(string.trim());
  return Number.isNaN(result) ? 0 : result;
}
