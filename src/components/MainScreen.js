import React, { useState } from "react";
import PropTypes from "prop-types";

import DateTimeDisplay from "./Dateandtime";
import Popup from "./Popup";
import "../style/MainScreen.css";
import background from "../assets/bg.jpg";

const MainScreen = ({ streams }) => {
  const [activeStreams, setActiveStreams] = useState([]);
  const [selectedStream, setSelectedStream] = useState(null);

  const toggleActive = (streamName) => {
    if (activeStreams.includes(streamName)) {
      setActiveStreams(activeStreams.filter((stream) => stream !== streamName));
    } else {
      setActiveStreams([...activeStreams, streamName]);
    }
  };

  const allStreams = [
    { streamName: "Reformate", streamNumber: 1 },
    { streamName: "Isomerate", streamNumber: 2 },
    { streamName: "Prime-G LCN", streamNumber: 3 },
    { streamName: "Prime-G HCN", streamNumber: 4 },
    { streamName: "FR SRN", streamNumber: 5 },
    { streamName: "FCCU Cr. Gasoline", streamNumber: 6 },
    { streamName: "Pentane", streamNumber: 7 },
    { streamName: "PDS NAPTHA", streamNumber: 8 },
    { streamName: "DHT Naptha", streamNumber: 9 },
    { streamName: "FRE SRN", streamNumber: 10 },
    { streamName: "MS Production", streamNumber: 11 },
  ];

  const getStreamData = (identifier) => {
    const stream = streams.find(
      (s) => s.streamName === identifier || s.streamNumber === identifier
    );
    return (
      stream || {
        streamName: identifier,
        qtyTonsPerDay: "",
        wt: "",
        density: "",
        volumeM3PerHr: "",
        volPercentage: "",
        ron: "",
        roi: "",
        sulphurWtPercentage: "",
        rvpPsi: "",
        rvi: "",
        benzeneVolPercentage: "",
        aromVolPercentage: "",
        olefinVolPercentage: "",
        recy70DegC: "",
        recy100DegC: "",
        minVol: "",
        maxVol: "",
      }
    );
  };

  const handleStreamNameClick = (identifier) => {
    const streamData = getStreamData(identifier);
    setSelectedStream(streamData);
  };

  const closePopup = () => {
    setSelectedStream(null);
  };

  return (
    <div className="main-screen">
      <img className="image1Icon" alt="" src={background} />
      <div className="msBlendOptimisation">
        <div className="msBlendOptimisationContent">
          <h1 className="msblend">MS BLEND OPTIMIZATION</h1>
          <div className="date-time-container">
            <DateTimeDisplay />
          </div>
        </div>
      </div>

      <div className="table-responsive-horizontal">
        <table className="table table-dark">
          <thead>
            <tr>
              <th>#</th>
              <th className="heading-spacing">Stream Name</th>
              <th className="heading-spacing">Qty_tons_per_day</th>
              <th className="heading-spacing">Wt%</th>
              <th className="heading-spacing">Density</th>
              <th className="heading-spacing">Volume M3/hr</th>
              <th className="heading-spacing">Vol %</th>
              <th className="heading-spacing">RON</th>
              <th className="heading-spacing">ROI</th>
              <th className="heading-spacing">Sulphur Wt%</th>
              <th className="heading-spacing">RVP PSI</th>
              <th className="heading-spacing">RVI</th>
              <th className="heading-spacing">Benzene Vol%</th>
              <th className="heading-spacing">Arom Vol%</th>
              <th className="heading-spacing">Olefin Vol%</th>
              <th className="heading-spacing">Recy @ 70 Deg C</th>
              <th className="heading-spacing">Recy @ 100 Deg C</th>
              <th className="heading-spacing">Min Vol</th>
              <th className="heading-spacing">Max Vol</th>
              <th className="heading-spacing">Active Status</th>
            </tr>
          </thead>
          <tbody>
            {allStreams.map((stream, index) => {
              const data = getStreamData(stream.streamName);
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td
                    onClick={() => handleStreamNameClick(stream.streamName)}
                    style={{ cursor: "pointer" }}
                    className="italics"
                  >
                    {data.streamName}
                  </td>
                  <td>{data.qtyTonsPerDay}</td>
                  <td>{data.wt}</td>
                  <td>{data.density}</td>
                  <td>{data.volumeM3PerHr}</td>
                  <td>{data.volPercentage}</td>
                  <td>{data.ron}</td>
                  <td>{data.roi}</td>
                  <td>{data.sulphurWtPercentage}</td>
                  <td>{data.rvpPsi}</td>
                  <td>{data.rvi}</td>
                  <td>{data.benzeneVolPercentage}</td>
                  <td>{data.aromVolPercentage}</td>
                  <td>{data.olefinVolPercentage}</td>
                  <td>{data.recy70DegC}</td>
                  <td>{data.recy100DegC}</td>
                  <td>{data.minVol}</td>
                  <td>{data.maxVol}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={activeStreams.includes(stream.streamName)}
                      onChange={() => toggleActive(stream.streamName)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="button-container">
        <a href="/optimum-blend" target="_blank" rel="noopener noreferrer">
          <button className="button">Optimize</button>
        </a>
      </div>
      {selectedStream && <Popup stream={selectedStream} onClose={closePopup} />}
    </div>
  );
};

MainScreen.propTypes = {
  streams: PropTypes.array.isRequired,
};

export default MainScreen;
