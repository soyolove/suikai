import RevenueExpenses from './RevenueExpenses';
import ActivityManager from './ActivityManager';
import ActiveCards from './ActiveCards';
import AnnualProfits from './AnnualProfits';
import LineOfCredit from './LineOfCredit';
import MainStocks from './MainStocks';
import AgentSummaryCard from './AgentSummaryCard';
import EventPumpSection from './EventPump';
import EventPoolSection from './EventPool';
import TaskPool from './TaskPool';
import MarketAnalysisCard from './MarketAnalysis';
import PortfolioCard from './Portfolio';

export default function Dashboard() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen p-6">
      <div className="max-w-8xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Financial Dashboard</h1>
          <AgentSummaryCard />
        </header>
        
        {/* Main Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Row 1 */}
          <div className="col-span-4 md:col-span-1 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <EventPumpSection />
          </div>
          
          <div className="col-span-4 md:col-span-1 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <EventPoolSection />
          </div>
          
          <div className="col-span-4 md:col-span-1 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <TaskPool />
          </div>

          {/* Row 2 */}
          <div className="col-span-4 md:col-span-2 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <MarketAnalysisCard />
          </div>
          
          <div className="col-span-4 md:col-span-1 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <PortfolioCard />
          </div>
        </div>
      </div>
    </div>
  );
}
