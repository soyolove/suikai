"use client"
import { Clock, Zap, Database, Cpu } from 'lucide-react';
import React, { useState } from 'react';

type Event = {
  id: string;
  name: string;
  description: string;
  timestamp: string;
  type: 'automation' | 'api' | 'data' | 'system';
};

export default function EventPool() {
  const [events] = useState<Event[]>([
    {
      id: '1',
      name: 'Portfolio Rebalance',
      description: 'Adjusted BTC/ETH allocation based on market conditions',
      timestamp: '2023-10-15 14:32:00',
      type: 'automation'
    },
    {
      id: '2',
      name: 'API Rate Limit Update',
      description: 'Optimized Binance API call frequency',
      timestamp: '2023-10-15 14:28:00',
      type: 'api'
    },
    {
      id: '3',
      name: 'OHLCV Data Sync',
      description: 'Completed 1h candle data synchronization',
      timestamp: '2023-10-15 14:25:00',
      type: 'data'
    },
    {
      id: '4',
      name: 'Risk Check Routine',
      description: 'Executed portfolio exposure validation',
      timestamp: '2023-10-15 14:20:00',
      type: 'system'
    }
  ]);

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'automation': return <Zap size={16} className="text-purple-500" />;
      case 'api': return <Cpu size={16} className="text-blue-500" />;
      case 'data': return <Database size={16} className="text-green-500" />;
      default: return <Zap size={16} className="text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm h-full">
      {/* 紧凑头部布局 */}
      <div className="grid grid-cols-[1fr_auto] items-center mb-4">
        <div className="flex items-center gap-2">
          <Clock className="text-orange-500" size={18} />
          <h2 className="text-lg font-semibold truncate">Event Pool</h2>
        </div>
        <button className="px-3 py-1.5 text-xs rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
          Filter
        </button>
      </div>

      {/* 紧凑时间线布局 */}
      <div className="space-y-3">
        {events.map((event) => (
          <div 
            key={event.id}
            className="group relative pl-4 border-l border-gray-100 hover:border-orange-200 transition-colors"
          >
            {/* 缩小时间线标记 */}
            <div className="absolute w-2 h-2 bg-white border-2 border-orange-400 rounded-full -left-[5px] top-3 z-10" />
            
            {/* 紧凑内容容器 */}
            <div className="ml-3 p-2.5 bg-gray-50 rounded-md hover:bg-white transition-all">
              <div className="grid grid-cols-[auto_1fr] gap-2 items-start">
                <div className="mt-0.5">
                  {React.cloneElement(getEventIcon(event.type), { 
                    size: 14,
                    className: getEventIcon(event.type).props.className.replace('600', '500')
                  })}
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-baseline gap-2">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {event.name}
                    </h3>
                    <span className="text-[0.75rem] text-gray-400 font-mono shrink-0">
                      {new Date(event.timestamp).toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-tight line-clamp-2">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

