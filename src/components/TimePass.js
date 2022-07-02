import React, { useState } from 'react'
import LineChart from './LineChart'
import BarChart from './BarChart'
import PieChart from './PieChart'
import {UserData} from './Data'
import {UserData1} from './Data'
import { Line } from 'react-chartjs-2'

function TimePass() {
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
    
        ],
      });
    return (
        <div>
          {console.log()}
          <div style={{width: 700}}>
          <PieChart chartData={userData}/>
          </div>
      </div>
  )
}

export default TimePass
