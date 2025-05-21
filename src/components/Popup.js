import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "../style/Popup.css";

const Popup = ({ stream, onClose }) => {
  const [method, setMethod] = useState({});
  const [manualValues, setManualValues] = useState({});
  const [minValues, setMinValues] = useState({});
  const [maxValues, setMaxValues] = useState({});
  const [volumeMin, setVolumeMin] = useState("");
  const [volumeMax, setVolumeMax] = useState("");

  const popupRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose();
    }
  };

  const handleMethodChange = (key, e) => {
    const value = e.target.value;
    setMethod((prevMethod) => ({ ...prevMethod, [key]: value }));
  };

  const handleManualValueChange = (key, e) => {
    setManualValues({ ...manualValues, [key]: e.target.value });
  };

  const handleSetValues = () => {
    const streamNumber = parseInt(stream.streamNumber);
    console.log(
      `Stream Name: ${stream.streamName}, Stream Number: ${streamNumber}`
    );

    if (stream.streamName === "MS Production") {
      console.log("Values Set:", { minValues, maxValues });
      // Perform your action with the set values here
    } else if (
      [
        "FR SRN",
        "FCCU Cr. Gasoline",
        "Pentane",
        "PDS NAPTHA",
        "DHT Naptha",
        "FRE SRN",
      ].includes(stream.streamName)
    ) {
      console.log("Volume Range Set:", { volumeMin, volumeMax });
      // Perform your action with the volume range here
    } else {
      console.log("Manual Values Set:", manualValues);
      // Perform your action with the manual values here
    }
  };

  const attributesToShow = [
    "Density",
    "RON",
    "Sulphur Wt%",
    "RVP PSI",
    "Benzene Vol%",
    "Arom Vol%",
    "Olefin Vol%",
    "Recy @ 70 Deg C",
    "Recy @ 100 Deg C",
  ];

  return (
    <div ref={popupRef} className="popup">
      <h2>{stream.streamName}</h2>
      <div className="attribute-container">
        {attributesToShow.map((key) => (
          <div className="attribute-row" key={key}>
            <span>{key}</span>
            {stream.streamName === "MS Production" ? (
              <>
                <input
                  type="text"
                  value={minValues[key] || ""}
                  onChange={(e) =>
                    setMinValues({ ...minValues, [key]: e.target.value })
                  }
                  placeholder="Min"
                />
                <input
                  type="text"
                  value={maxValues[key] || ""}
                  onChange={(e) =>
                    setMaxValues({ ...maxValues, [key]: e.target.value })
                  }
                  placeholder="Max"
                />
              </>
            ) : (
              <>
                <select
                  value={method[key] || "Method"}
                  onChange={(e) => handleMethodChange(key, e)}
                  className="inputstyle"
                >
                  <option disabled value="Method">
                    Method
                  </option>
                  <option value="manual">Manual</option>
                  <option value="LAB">LAB</option>
                  <option value="ml model">ML Model</option>
                </select>
                {method[key] === "manual" && (
                  <input
                    type="text"
                    value={manualValues[key] || ""}
                    onChange={(e) => handleManualValueChange(key, e)}
                    placeholder="Enter manual value"
                  />
                )}
              </>
            )}
          </div>
        ))}
        {[
          "FR SRN",
          "FCCU Cr. Gasoline",
          "Pentane",
          "PDS NAPTHA",
          "DHT Naptha",
          "FRE SRN",
        ].includes(stream.streamName) && (
          <div className="volume-range">
            <b><span>Volume M3/hr</span></b>
            <input
              type="text"
              value={volumeMin}
              onChange={(e) => setVolumeMin(e.target.value)}
              placeholder="Min"
              className="inputstyle2"
            />
            <input
              type="text"
              value={volumeMax}
              onChange={(e) => setVolumeMax(e.target.value)}
              placeholder="Max"
              className="inputstyle2"
            />
          </div>
        )}
      </div>
      <div className="button-group">
        <button className="set-btn" onClick={handleSetValues}>
          Set
        </button>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

Popup.propTypes = {
  stream: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Popup;
