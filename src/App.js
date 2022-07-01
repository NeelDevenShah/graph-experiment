import React, { useState } from 'react'
import LineChart from './components/LineChart'
import BarChart from './components/BarChart'
import PieChart from './components/PieChart'
import {UserData} from './Data'
import {UserData1} from './Data'

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained IPL",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },

      {
        label: "Users Gained PIL",
        data: UserData1.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },

    ],
  });

  return (
    <div>
      <div>
        <div style={{width: 700}}>
        <LineChart chartData={userData}/>
        </div>

        <div style={{width: 700}}>
        <BarChart chartData={userData}/>
        </div>
      </div>
    </div>
  )
}

export default App