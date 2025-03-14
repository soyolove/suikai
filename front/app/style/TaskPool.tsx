"use client"
import { Clock, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import React, { useState } from 'react'

type Task = {
  id: string
  name: string
  description: string
  status: 'success' | 'processing' | 'failed' | 'pending'
  executionTime: string
  duration: string
}

export default function TaskPool() {
  const [tasks] = useState<Task[]>([
    {
      id: '1',
      name: 'Portfolio Rebalance',
      description: 'Automated asset allocation update',
      status: 'success',
      executionTime: '2023-10-15 14:32:00',
      duration: '1.2s'
    },
    {
      id: '2',
      name: 'Data Pipeline',
      description: 'OHLCV historical data sync',
      status: 'processing',
      executionTime: '2023-10-15 14:30:00',
      duration: '23s'
    },
    {
      id: '3',
      name: 'Risk Analysis',
      description: 'Position exposure calculation',
      status: 'failed',
      executionTime: '2023-10-15 14:28:00',
      duration: 'N/A'
    },
    {
      id: '4',
      name: 'API Health Check',
      description: 'Exchange connectivity test',
      status: 'pending',
      executionTime: '--',
      duration: '--'
    }
  ])

  const statusConfig = {
    success: { 
      color: 'bg-green-400', 
      icon: <CheckCircle2 className="text-green-500" /> 
    },
    processing: { 
      color: 'bg-yellow-400', 
      icon: <Loader2 className="animate-spin text-yellow-500" /> 
    },
    failed: { 
      color: 'bg-red-400', 
      icon: <AlertCircle className="text-red-500" /> 
    },
    pending: { 
      color: 'bg-gray-400', 
      icon: <Clock className="text-gray-500" /> 
    }
  }

  const formatTime = (time: string) => {
    if (time === '--') return time
    const date = new Date(time)
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false
    })
  }

    return (
    <div className="bg-white rounded-xl p-4 shadow-sm h-full">
      {/* 紧凑头部 */}
      <div className="grid grid-cols-[1fr_auto] items-center mb-4">
        <h2 className="text-lg font-semibold">Task Pool</h2>
        <button className="px-3 py-1.5 text-xs rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
          Filter
        </button>
      </div>

      {/* 紧凑表格布局 */}
      <div className="space-y-2">
        {tasks.map(task => (
          <div 
            key={task.id}
            className="grid grid-cols-[min-content_1fr_auto] items-center gap-3 p-2.5 rounded-md border border-gray-100 hover:bg-gray-50 transition-colors"
          >
            {/* 状态图标 */}
            <div className="flex items-center justify-center w-5">
              {React.cloneElement(statusConfig[task.status].icon, {
                size: 14,
                className: statusConfig[task.status].icon.props.className.replace('size-16', 'size-14')
              })}
            </div>

            {/* 任务主体 */}
            <div className="min-w-0 space-y-0.5">
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-medium truncate">{task.name}</span>
                <span className="text-[0.75rem] text-gray-500 font-mono">
                  {task.duration}
                </span>
              </div>
              <p className="text-xs text-gray-500 leading-tight line-clamp-1">
                {task.description}
              </p>
            </div>

            {/* 时间状态 */}
            <div className="flex flex-col items-end space-y-0.5">
              <span className="text-[0.75rem] font-mono text-gray-500">
                {formatTime(task.executionTime)}
              </span>
              <div className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${statusConfig[task.status].color}`} />
                <span className="text-[0.75rem] capitalize text-gray-600">
                  {task.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
