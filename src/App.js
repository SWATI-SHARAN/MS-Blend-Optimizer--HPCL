import "./App.css";
import MainScreen from "./components/MainScreen";
import OptimumBlend from "./components/Optimumblend";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [streamsData, setStreamsData] = useState([]);
  // const [streamsData, setStreamsData] = useState([
  //   {
  //     streamName: "Reformate",
  //     qtyTonsPerDay: "2061.63",
  //     wt: "38.205",
  //     density: "0.811",
  //     volumeM3PerHr: "105.92",
  //     volPercentage: "32.9599",
  //     ron: "101",
  //     roi: "0.527104",
  //     sulphurWtPercentage: "0.0001",
  //     rvpPsi: "3.4",
  //     rvi: "4.61688",
  //     benzeneVolPercentage: "0.42",
  //     aromVolPercentage: "75",
  //     olefinVolPercentage: "1.5",
  //     recy70DegC: "0",
  //     recy100DegC: "100",
  //     minVol: "0",
  //     maxVol: "0",
  //   },
  //   {
  //     streamName: "Isomerate",
  //     qtyTonsPerDay: "949.208",
  //     wt: "14.5534",
  //     density: "0.674",
  //     volumeM3PerHr: "5868",
  //     volPercentage: "18.2599",
  //     ron: "86.5",
  //     roi: "0.714972",
  //     sulphurWtPercentage: "0.0001",
  //     rvpPsi: "11.5",
  //     rvi: "21.1774",
  //     benzeneVolPercentage: "0.14",
  //     aromVolPercentage: "0",
  //     olefinVolPercentage: "0",
  //     recy70DegC: "72",
  //     recy100DegC: "100",
  //     minVol: "0",
  //     maxVol: "0",
  //   },
  //   {
  //     streamName: "Prime-G LCN",
  //     qtyTonsPerDay: "615.283",
  //     wt: "10.096",
  //     density: "0.653",
  //     volumeM3PerHr: "39.26",
  //     volPercentage: "12.2168",
  //     ron: "95.5",
  //     roi: "0.602572",
  //     sulphurWtPercentage: "0.001",
  //     rvpPsi: "15",
  //     rvi: "29.5198",
  //     benzeneVolPercentage: "0.3",
  //     aromVolPercentage: "0.03",
  //     olefinVolPercentage: "60.7",
  //     recy70DegC: "97",
  //     recy100DegC: "100",
  //     minVol: "0",
  //     maxVol: "0",
  //   },
  //   {
  //     streamName: "Prime-G HCN",
  //     qtyTonsPerDay: "1267.86",
  //     wt: "21.048",
  //     density: "0.798",
  //     volumeM3PerHr: "66.2",
  //     volPercentage: "20.6",
  //     ron: "84",
  //     roi: "0.742596",
  //     sulphurWtPercentage: "0.001",
  //     rvpPsi: "2.8",
  //     rvi: "3.62199",
  //     benzeneVolPercentage: "1.6",
  //     aromVolPercentage: "15",
  //     olefinVolPercentage: "31",
  //     recy70DegC: "0",
  //     recy100DegC: "100",
  //     minVol: "0",
  //     maxVol: "0",
  //   },
  //   {
  //     streamName: "FR SRN",
  //     qtyTonsPerDay: "95.04",
  //     wt: "1.77363",
  //     density: "0.72",
  //     volumeM3PerHr: "5.5",
  //     volPercentage: "1.71148",
  //     ron: "65",
  //     roi: "0.893058",
  //     sulphurWtPercentage: "0.015",
  //     rvpPsi: "6",
  //     rvi: "9.39051",
  //     benzeneVolPercentage: "0.7",
  //     aromVolPercentage: "5",
  //     olefinVolPercentage: "0.1",
  //     recy70DegC: "25",
  //     recy100DegC: "100",
  //     minVol: "0",
  //     maxVol: "0",
  //   },
  //   {
  //     streamName: "FCCU Cr. Gasoline",
  //     qtyTonsPerDay: "277.901",
  //     wt: "5.18616",
  //     density: "0.7237",
  //     volumeM3PerHr: "16",
  //     volPercentage: "4.97884",
  //     ron: "92",
  //     roi: "0.648393",
  //     sulphurWtPercentage: "0.035",
  //     rvpPsi: "9",
  //     rvi: "15.5885",
  //     benzeneVolPercentage: "0.43",
  //     aromVolPercentage: "16",
  //     olefinVolPercentage: "45",
  //     recy70DegC: "40",
  //     recy100DegC: "60",
  //     minVol: "0",
  //     maxVol: "0",
  //   },
  //   {
  //     streamName: "Pentane",
  //     qtyTonsPerDay: "6.144",
  //     wt: "0.114659",
  //     density: "0.64",
  //     volumeM3PerHr: "0.4",
  //     volPercentage: "0.124471",
  //     ron: "70",
  //     roi: "0.863263",
  //     sulphurWtPercentage: "0.0013",
  //     rvpPsi: "11.5",
  //     rvi: "21.1774",
  //     benzeneVolPercentage: "0.3",
  //     aromVolPercentage: "0.3",
  //     olefinVolPercentage: "0",
  //     recy70DegC: "72",
  //     recy100DegC: "100",
  //     minVol: "0",
  //     maxVol: "0",
  //   },
  //   {
  //     streamName: "PDS NAPTHA",
  //     qtyTonsPerDay: "190.464",
  //     wt: "3.55442",
  //     density: "0.64",
  //     volumeM3PerHr: "12.4",
  //     volPercentage: "3.8586",
  //     ron: "65",
  //     roi: "0.893058",
  //     sulphurWtPercentage: "0.0001",
  //     rvpPsi: "11.5",
  //     rvi: "21.1774",
  //     benzeneVolPercentage: "6.5",
  //     aromVolPercentage: "6.5",
  //     olefinVolPercentage: "0",
  //     recy70DegC: "72",
  //     recy100DegC: "100",
  //     minVol: "0",
  //     maxVol: "0",
  //   },
  //   {
  //     streamName: "DHT Naptha",
  //     qtyTonsPerDay: "111.6",
  //     wt: "2.08267",
  //     density: "0.75",
  //     volumeM3PerHr: "6.2",
  //     volPercentage: "1.9293",
  //     ron: "65",
  //     roi: "0.893058",
  //     sulphurWtPercentage: "0.0008",
  //     rvpPsi: "8",
  //     rvi: "13.4543",
  //     benzeneVolPercentage: "0.1",
  //     aromVolPercentage: "11",
  //     olefinVolPercentage: "1",
  //     recy70DegC: "0.1",
  //     recy100DegC: "100",
  //     minVol: "0",
  //     maxVol: "0",
  //   },
  //   {
  //     streamName: "FRE SRN",
  //     qtyTonsPerDay: "181.44",
  //     wt: "3.38602",
  //     density: "0.7",
  //     volumeM3PerHr: "10.8",
  //     volPercentage: "3.36072",
  //     ron: "70",
  //     roi: "0.863263",
  //     sulphurWtPercentage: "0.004",
  //     rvpPsi: "8",
  //     rvi: "13.4543",
  //     benzeneVolPercentage: "6.5",
  //     aromVolPercentage: "15",
  //     olefinVolPercentage: "0.1",
  //     recy70DegC: "0.1",
  //     recy100DegC: "100",
  //     minVol: "0",
  //     maxVol: "0",
  //   },
  //   {
  //     streamName: "MS Production",
  //     qtyTonsPerDay: "5756.57",
  //     wt: "100",
  //     density: "0.746381",
  //     volumeM3PerHr: "321.36",
  //     volPercentage: "100",
  //     ron: "91.0653",
  //     roi: "0.660219",
  //     sulphurWtPercentage: "0.0026026",
  //     rvpPsi: "7.41369",
  //     rvi: "12.2333",
  //     benzeneVolPercentage: "1.03519",
  //     aromVolPercentage: "29.6633",
  //     olefinVolPercentage: "16.5608",
  //     recy70DegC: "30.2899",
  //     recy100DegC: "98.0085",
  //     minVol: "0",
  //     maxVol: "300",
  //   },
  // ]);

  useEffect(() => {
    // In a real application, you would fetch data from your backend here
    const fetchData = async () => {
      try {
        const response = await fetch("your-backend-api-endpoint");
        const data = await response.json();
        setStreamsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainScreen streams={streamsData} />} />
          <Route
            path="/optimum-blend"
            element={<OptimumBlend streams={streamsData} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
