export default function LineOfCredit() {
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Line of Credit</h2>
          <button className="text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </button>
        </div>
        
        <div className="relative w-full h-56 mb-6">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M100,100 m-90,0 a90,90 0 1,0 180,0 a90,90 0 1,0 -180,0" fill="none" stroke="#f3f4f6" strokeWidth="20" />
            <path d="M100,100 m-90,0 a90,90 0 1,0 180,0 a90,90 0 1,0 -180,0" fill="none" stroke="#ef4444" strokeWidth="20" strokeDasharray="565.48" strokeDashoffset="395.84" strokeLinecap="round" />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-sm text-gray-500">Amount Borrowed</div>
            <div className="text-3xl font-bold">$3,275<span className="text-sm text-gray-500">.33</span></div>
          </div>
        </div>
        
        <div>
          <div className="text-sm text-gray-500 mb-1">Remaining Credit</div>
          <div className="text-3xl font-bold">$46,724<span className="text-sm text-gray-500">.67</span></div>
        </div>
      </div>
    );
  }