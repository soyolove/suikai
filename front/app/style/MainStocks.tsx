"use client"
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function MainStocks() {
  const [timeframe, setTimeframe] = useState('Monthly');
  
  const data = {
    labels: ['8', '', '15', '', '22', '', '29'],
    datasets: [
      {
        label: 'Stock Value',
        data: [2000, 2800, 2200, 2900, 1800, 2500, 1900],
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.5)',
        tension: 0.3,
      },
    ],
  };
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 1000,
        max: 3000,
        ticks: {
          stepSize: 1000,
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold">Main Stocks</h2>
          <p className="text-sm text-gray-500">Extended & Limited</p>
        </div>
        <div className="text-xl font-semibold text-right">
          $16,073.49
          <div className="text-sm font-normal text-green-500">+ 9.3%</div>
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
          Compare
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
        <div className="flex items-center gap-1">
          <button className="text-sm text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3m0 0l3 3m-3-3v6M17 12l-3 3m0 0l-3-3m3 3V6" />
            </svg>
          </button>
          <div className="relative">
            <select 
              className="appearance-none bg-white border border-gray-200 rounded-lg px-3 py-1 pr-8 text-sm"
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
            >
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-36">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}