"use client"
import { useState } from 'react';

export default function ActiveCards() {
  const [isLocked, setIsLocked] = useState(true);

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Active Cards</h2>
        <button 
          className="flex items-center gap-1 px-3 py-1 text-sm rounded-full hover:bg-gray-100"
          onClick={() => setIsLocked(!isLocked)}
        >
          Lock Card
          {isLocked ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
            </svg>
          )}
        </button>
      </div>
      
      <div className="relative mb-6">
        <div className="bg-gradient-to-r from-red-400 to-red-500 rounded-lg p-5 text-white relative overflow-hidden h-48">
          <div className="text-4xl font-bold text-red-100 absolute top-8 left-6 opacity-40">NO</div>
          <div className="text-6xl font-bold text-red-100 absolute top-16 left-32 opacity-40">BC</div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="mb-4 flex justify-between items-center">
              <div className="font-medium">**** 2719</div>
              <img src="/api/placeholder/60/40" alt="VISA" className="h-8" />
            </div>
            <button className="w-full py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800">
              Send Funds
            </button>
          </div>
        </div>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <div className="flex justify-between mb-1">
        <div>
          <p className="text-sm text-gray-500">Minimum Payment</p>
          <p className="text-xl font-semibold text-red-500">$ 25.00</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Payment Due</p>
          <p className="text-xl font-semibold">Oct 13</p>
        </div>
      </div>
      
      <div className="flex items-center text-sm text-red-500">
        <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </span>
        <span>Edit card details</span>
      </div>
    </div>
  );
}