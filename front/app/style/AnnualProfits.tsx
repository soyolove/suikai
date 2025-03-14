'use client';
import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function AnnualProfits() {
  const [year, setYear] = useState('2023');
  
  // Data for the nested donut chart
  const data = {
    datasets: [
      {
        data: [14, 9.3, 6.8, 4],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 205, 86, 0.2)', 'rgba(239, 68, 68, 0.8)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 205, 86, 1)', 'rgba(239, 68, 68, 1)'],
        borderWidth: 1,
        cutout: '70%',
      },
    ],
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Annual profits</h2>
        <div className="relative">
          <select 
            className="appearance-none bg-white border border-gray-200 rounded-lg px-3 py-1 pr-8 text-sm"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="relative h-64">
        <Doughnut data={data} options={options} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-2xl font-bold">$4K</div>
          <div className="text-xs text-gray-500">Net Income</div>
        </div>
        
        <div className="absolute top-0 left-0 space-y-4 w-full">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-xl font-semibold">$ 14K</div>
              <div className="text-xs text-gray-500">Revenue</div>
            </div>
            <div className="text-xs text-green-500">+36% Y/Y</div>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <div className="text-xl font-semibold">$ 9.3K</div>
              <div className="text-xs text-gray-500">Gross Profit</div>
            </div>
            <div className="text-xs text-red-500">-2% Y/Y</div>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <div className="text-xl font-semibold">$ 6.8K</div>
              <div className="text-xs text-gray-500">Operating Income</div>
            </div>
            <div className="text-xs text-green-500">+26% Y/Y</div>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <div className="text-xl font-semibold">$4K</div>
              <div className="text-xs text-gray-500">Net Income</div>
            </div>
            <div className="text-xs text-green-500">+17% Y/Y</div>
          </div>
        </div>
      </div>
    </div>
  );
}