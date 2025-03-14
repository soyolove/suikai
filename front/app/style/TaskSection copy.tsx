"use client"
import { useState } from 'react';

type Task = {
  id: string;
  title: string;
  deadline: string;
  status: 'Urgent' | 'Non-urgent';
  completed: boolean;
};

export default function TaskEventPool() {
  const [filter, setFilter] = useState('Date: Oct 15');
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Send Tax Reports to Accountant',
      deadline: '12am, Oct 15',
      status: 'Urgent',
      completed: false,
    },
    {
      id: '2',
      title: 'Activate Business MasterCard',
      deadline: '11am, Oct 15',
      status: 'Non-urgent',
      completed: false,
    },
  ]);

  const toggleTaskCompletion = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">My tasks</h2>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm rounded-full border border-gray-200 hover:bg-gray-50">
            Add Task
          </button>
          <button className="px-4 py-2 text-sm text-white bg-red-400 rounded-full hover:bg-red-500">
            All Tasks
          </button>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">Sort by:</span>
          <div className="flex items-center gap-2">
            <span className="bg-gray-100 text-sm px-3 py-1 rounded-full flex items-center">
              {filter}
              <button className="ml-2 text-gray-400 hover:text-gray-600">×</button>
            </span>
            <button className="text-gray-400 font-bold">+</button>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        {tasks.map(task => (
          <div key={task.id} className="flex items-start gap-4">
            <div 
              className={`w-6 h-6 rounded-full border-2 border-gray-300 flex-shrink-0 mt-1 cursor-pointer ${
                task.completed ? 'bg-red-400 border-red-400' : ''
              }`}
              onClick={() => toggleTaskCompletion(task.id)}
            />
            <div className="flex-1">
              <h3 className="font-medium">{task.title}</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between mt-1">
                <div>
                  <p className="text-sm text-gray-500">Deadline</p>
                  <span className="text-sm font-medium">{task.deadline}</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <span className={`text-sm px-3 py-1 rounded-full inline-block ${
                    task.status === 'Urgent' 
                      ? 'bg-red-400 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {task.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}