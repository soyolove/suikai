// components/MarketAnalysisCard.tsx
import { ArrowUp, ArrowDown, Activity, PieChart, Bitcoin, Coins } from 'lucide-react'

export default function MarketAnalysisCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Activity className="text-blue-500" />
            Market Pulse Analysis
          </h2>
          <p className="text-sm text-gray-500 mt-1">Last updated: 2023-10-15 15:00 UTC</p>
        </div>
        <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
          Bullish Phase
        </span>
      </div>

      {/* 宏观指标网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricItem
          title="Total Market Cap"
          value="$1.12T"
          change="+3.2%"
          trend="up"
          icon={<PieChart size={18} />}
        />
        <MetricItem
          title="24h Volume"
          value="$32.4B"
          change="-1.5%"
          trend="down"
          icon={<Coins size={18} />}
        />
        <MetricItem
          title="Fear & Greed"
          value="68/100"
          change="Neutral"
          trend="stable"
          icon={<div className="w-4 h-4 bg-yellow-400 rounded-full" />}
        />
        <MetricItem
          title="BTC Dominance"
          value="48.3%"
          change="+0.8%"
          trend="up"
          icon={<Bitcoin size={18} />}
        />
      </div>

      {/* 微观分析面板 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnalysisSection 
          title="Macro Trends"
          items={[
            '• Institutional inflows up 22% MoM',
            '• Stablecoin supply at $124B ATH',
            '• DeFi TVL rebounds to $42B'
          ]}
        />
        
        <AnalysisSection
          title="Key Observations"
          items={[
            '• ETH/BTC ratio hits 3-month high',
            '• NFT volume down 40% WoW',
            '• Layer2 transactions +18%'
          ]}
        />
      </div>
    </div>
  )
}

function MetricItem({ title, value, change, trend, icon }: {
  title: string
  value: string
  change: string
  trend: 'up' | 'down' | 'stable'
  icon: React.ReactNode
}) {
  return (
    <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 text-gray-500 mb-2">
            {icon}
            <span className="text-sm font-medium">{title}</span>
          </div>
          <div className="text-2xl font-semibold">{value}</div>
        </div>
        <div className={`flex items-center gap-1 ${
          trend === 'up' ? 'text-green-600' : 
          trend === 'down' ? 'text-red-600' : 'text-gray-500'
        }`}>
          {trend === 'up' && <ArrowUp size={16} />}
          {trend === 'down' && <ArrowDown size={16} />}
          <span className="text-sm">{change}</span>
        </div>
      </div>
    </div>
  )
}

function AnalysisSection({ title, items }: {
  title: string
  items: string[]
}) {
  return (
    <div className="border-l-4 border-blue-100 pl-4">
      <h3 className="font-medium mb-2">{title}</h3>
      <ul className="space-y-2 text-sm text-gray-600">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-400 mr-2">▹</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
