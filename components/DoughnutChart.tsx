'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend  } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChart = ({
    accounts
    }: DoughnutChartProps
) => {
    const data = {
        
        datasets: [
            {
                label: 'Bank Accounts',
                data: [12323.23, 23231.23, 23323.11],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)'
                    
                ],   
                borderWidth: 2,
            },
        ],
        labels : ['CIBC', 'RBC', 'TD']

    }
  return (
    <Doughnut data={data} 
    options={{
        cutout: '55%',
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Bank Accounts'
            }
        }
    }}
    />
  )
}

export default DoughnutChart