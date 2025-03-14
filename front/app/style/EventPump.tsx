"use client"
import { useState } from 'react';

type EventPump = {
  id: string;
  name: string;
  description: string;
  status: 'Active' | 'Inactive' | 'Error';
  lastTriggered: string;
};

export default function EventPumpSection() {
  const [eventPumps] = useState<EventPump[]>([
    {
      id: '1',
      name: 'Market Data Listener',
      description: 'Real-time cryptocurrency price tracking',
      status: 'Active',
      lastTriggered: '2023-10-15 14:32:00'
    },
    {
      id: '2',
      name: 'Transaction Watcher',
      description: 'Monitoring on-chain wallet activities',
      status: 'Inactive',
      lastTriggered: '2023-10-15 12:45:00'
    },
    {
      id: '3',
      name: 'Risk Monitor',
      description: 'Portfolio exposure threshold alerts',
      status: 'Active',
      lastTriggered: '2023-10-15 15:12:00'
    },
    {
      id: '4',
      name: 'News Aggregator',
      description: 'Keyword-based financial news scanning',
      status: 'Error',
      lastTriggered: '2023-10-15 10:23:00'
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-gray-100 text-gray-600';
      case 'Error': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm h-full">
      {/* 头部布局优化 */}
      <div className="grid grid-cols-[1fr_auto] gap-2 items-center mb-4">
        <h2 className="text-lg font-semibold truncate">Event Pump</h2>
        <div className="flex gap-1.5">
          <button className="px-3 py-1.5 text-xs rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
            + Listener
          </button>
          <button className="px-3 py-1.5 text-xs text-white bg-blue-400 rounded-lg hover:bg-blue-500 transition-colors">
            View All
          </button>
        </div>
      </div>

      {/* 事件列表紧凑布局 */}
      <div className="space-y-3">
        {eventPumps.map(pump => (
          <div 
            key={pump.id}
            className="p-3 rounded-md border border-gray-100 hover:border-blue-200 transition-colors group"
          >
            <div className="flex justify-between items-start gap-2">
              {/* 主内容区 */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {pump.name}
                  </h3>
                  <span className={`text-[0.65rem] px-1.5 py-1 rounded-md ${getStatusColor(pump.status)}`}>
                    {pump.status}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  {pump.description}
                </p>
              </div>
            </div>
            
            {/* 时间戳 */}
            <div className="mt-2 text-[0.75rem] text-gray-400 font-mono">
              {new Date(pump.lastTriggered).toLocaleTimeString('en', { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: false
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}