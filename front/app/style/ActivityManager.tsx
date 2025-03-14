'use client'
import { useState } from 'react';

type Activity = {
  id: string;
  type: 'fraud' | 'loan' | 'wallet';
  title: string;
  amount?: number;
  currency?: string;
  date?: string;
  location?: string;
  repaymentDue?: string;
  verificationText?: string;
};

export default function ActivityManager() {
  const [activities, setActivities] = useState<Activity[]>([
    {
      id: '1',
      type: 'fraud',
      title: 'Fraud Alert',
      amount: 43.20,
      currency: 'USD',
      date: 'Thu, Oct 6',
      location: 'Caracas, Venezuela',
    },
    {
      id: '2',
      type: 'loan',
      title: 'Bankloan Approved',
      amount: 100000,
      currency: 'USD',
      repaymentDue: 'Oct 13, 2027',
    },
    {
      id: '3',
      type: 'wallet',
      title: 'Wallet Verification',
      verificationText: 'Enable 2-step verification to secure your wallet.',
    },
  ]);

  const [filters, setFilters] = useState({
    team: true,
    insights: true,
    today: true,
  });

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Activity manager</h2>
        <div className="flex gap-2 items-center">
          <button className="text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
          <button className="px-3 py-1 text-sm rounded-full hover:bg-gray-100">
            All Activities
          </button>
          <button className="px-3 py-1 text-sm rounded-full hover:bg-gray-100 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filters
          </button>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="Search in activities..." 
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-full w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
            Team
            <span className="ml-1 w-2 h-2 bg-red-400 rounded-full"></span>
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
            Insights
            <button className="ml-1 text-gray-400 hover:text-gray-600">×</button>
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800">
            Today
            <button className="ml-1 text-gray-400 hover:text-gray-600">×</button>
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {activities.map(activity => (
          <div key={activity.id} className="bg-gray-50 rounded-lg p-5">
            {activity.type === 'fraud' && (
              <>
                <div className="flex items-center gap-2 text-red-500 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{activity.title}</span>
                </div>
                <div className="mb-3">
                  <span className="text-3xl font-bold">${activity.amount?.toFixed(2)}</span>
                  <span className="text-gray-400 ml-2">{activity.currency}</span>
                </div>
                <div className="flex flex-col gap-2 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{activity.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{activity.location}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="w-full py-2 bg-gray-100 rounded-lg text-sm font-medium hover:bg-gray-200">
                    Details
                  </button>
                </div>
              </>
            )}
            
            {activity.type === 'loan' && (
              <>
                <div className="mb-3 font-medium">{activity.title}</div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                      <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-3xl font-bold">${activity.amount?.toLocaleString()}</span>
                  <span className="text-gray-400 ml-2">{activity.currency}</span>
                </div>
                <div className="text-sm text-gray-500 mb-6">
                  <div>Repayment due</div>
                  <div className="font-medium text-gray-800">{activity.repaymentDue}</div>
                </div>
              </>
            )}
            
            {activity.type === 'wallet' && (
              <>
                <div className="mb-5 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-medium text-lg mb-2">{activity.title}</h3>
                  <p className="text-sm text-gray-500">{activity.verificationText}</p>
                </div>
                <div>
                  <button className="w-full py-3 bg-red-400 text-white rounded-lg font-medium hover:bg-red-500">
                    Enable
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}