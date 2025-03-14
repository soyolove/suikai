'use client'
import { useState } from 'react';
import { BarChart } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function RevenueExpenses() {
  const [timeframe, setTimeframe] = useState('Weekly');
  
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Income',
        data: [2400, 2200, 2600, 2800, 2700, 2400, 2300],
        backgroundColor: 'rgba(239, 68, 68, 0.8)',
      },
      {
        label: 'Expenses',
        data: [-800, -1000, -900, -1400, -1000, -900, -1200],
        backgroundColor: 'rgba(209, 213, 219, 0.5)',
      },
    ],
  };
  
  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Revenue & Expenses</h2>
        <div className="relative">
          <select 
            className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 text-sm"
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
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-sm text-gray-500">Total Income</p>
          <p className="text-2xl font-semibold">$ 23,194.80</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Total Paid</p>
          <p className="text-2xl font-semibold">$ 8,145.20</p>
        </div>
      </div>
      
      <div className="h-48">
        <BarChart data={data} options={options} />
      </div>
    </div>
  );
}