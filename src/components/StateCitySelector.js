import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * StateCitySelector
 * - statesData: { stateName: [city1, city2, ...], ... }
 * Behavior: when the user selects a city, we immediately navigate to /listings/:city
 */
export default function StateCitySelector({ statesData }) {
  const navigate = useNavigate();
  const stateKeys = Object.keys(statesData);
  const [state, setState] = useState(stateKeys[0] || "");
  const [city, setCity] = useState(state ? statesData[state][0] : "");

  useEffect(() => {
    if (state) {
      setCity(statesData[state][0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  function onCityChange(e) {
    const selectedCity = e.target.value;
    setCity(selectedCity);
    // redirect immediately to listings for the selected city
    navigate(`/listings/${encodeURIComponent(selectedCity)}`);
  }

  return (
    <div className="d-flex flex-column gap-2" style={{ minWidth: 280 }}>
      <label className="form-label text-white">What state are you in?</label>

      <div className="d-flex gap-2">
        <select
          className="form-select"
          value={state}
          onChange={(e) => setState(e.target.value)}
          aria-label="Select state"
        >
          {stateKeys.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <select
          className="form-select"
          value={city}
          onChange={onCityChange}
          aria-label="Select city"
        >
          {state &&
            statesData[state].map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
        </select>
      </div>

      <small className="text-white-50">
        Select your city to see available services there. You will be redirected automatically.
      </small>
    </div>
  );
}
