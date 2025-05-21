import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import DateTimeDisplay from "./Dateandtime";
import "../style/OptimumBlend.css";
import back from "../assets/backbutton.jpg";

const OptimumBlend = ({ streams }) => {
  const [activeStreams, setActiveStreams] = useState([]);

  const toggleActive = (streamName) => {
    if (activeStreams.includes(streamName)) {
      setActiveStreams(activeStreams.filter((stream) => stream !== streamName));
    } else {
      setActiveStreams([...activeStreams, streamName]);
    }
  };

  const allStreams = [
    "Reformate",
    "Isomerate",
    "Prime-G LCN",
    "Prime-G HCN",
    "FR SRN",
    "FCCU Cr. Gasoline",
    "Pentane",
    "PDS NAPTHA",
    "DHT Naptha",
    "FRE SRN",
    "MS Production",
  ];

  const getStreamData = (streamName) => {
    const stream = streams.find((s) => s.streamName === streamName);
    return (
      stream || {
        streamName: streamName,
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
        minVol: "",
        maxVol: "",
      }
    );
  };

  return (
    <div className="main-screen">
      <div className="msBlendOptimisation">
        <div className="msBlendOptimisationContent">
          <h1 className="optimumBlend1">OPTIMUM BLEND</h1>
          <Link to="/" className="back-button">
            <img src={back} alt="Back" />
          </Link>
          <div className="date-time-container">
            <DateTimeDisplay />
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-dark">
          <thead>
            <tr>
              <th>#</th>
              <th className="heading-spacing sticky">Stream Name</th>
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
              <th className="heading-spacing">Min Vol</th>
              <th className="heading-spacing">Max Vol</th>
              <th className="heading-spacing">Active Status</th>
            </tr>
          </thead>
          <tbody>
            {allStreams.map((streamName, index) => {
              const data = getStreamData(streamName);
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td className="sticky">
                    <i>{data.streamName}</i>
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
                  <td>{data.minVol}</td>
                  <td>{data.maxVol}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={activeStreams.includes(streamName)}
                      onChange={() => toggleActive(streamName)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

OptimumBlend.propTypes = {
  streams: PropTypes.array.isRequired,
};

export default OptimumBlend;
