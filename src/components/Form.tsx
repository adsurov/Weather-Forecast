import React, { useState } from "react";

type FormProps = {
  onLatChange: (number: number) => void;
  onLonChange: (number: number) => void;
  apiCall: () => void;
};

export default function Form(props: FormProps) {
  const [valueLat, setValueLat] = useState("");
  const [valueLon, setValueLon] = useState("");

  const { onLatChange, onLonChange, apiCall } = props;

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const changeLatHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueLat(event.target.value);
    onLatChange(parseCoordinate(event.target.value));
  };

  const changeLonHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueLon(event.target.value);
    onLonChange(parseCoordinate(event.target.value));
  };
  return (
    <>
      <form className="flex flex-col " onSubmit={submitHandler}>
        <div className="flex flex-wrap justify-between">
          <div className="flex flex-col w-[47.5%]">
            <label className=" text-white " htmlFor="lat">
              Широта:
            </label>
            <input
              className="px-3 py-1 border rounded-md"
              type="number"
              id="lat"
              placeholder="Введите широту"
              value={valueLat}
              onChange={changeLatHandler}
            />
          </div>
          <div className="flex flex-col w-[47.5%]">
            <label className=" text-white " htmlFor="lon">
              Долгота:
            </label>
            <input
              className="px-3 py-1 border rounded-md"
              type="number"
              id="lon"
              placeholder="Введите долготу"
              value={valueLon}
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