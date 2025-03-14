import { cn } from "@/lib/utils"

export default function AgentSummaryCard() {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 w-full mb-8">
      {/* Agent信息区块 */}
      <div className="flex-1 flex items-center gap-4 ">
        <div className="h-12 w-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
        <div className="flex flex-col">
          <h2 className="font-semibold text-lg">AI Trading Agent v2.1</h2>
          <p className="text-sm text-gray-500 line-clamp-1">
            Autonomous quantitative trading strategy agent specializing in crypto derivatives
          </p>
        </div>
      </div>

      {/* 合约地址 */}
      <div className="flex-1 min-w-[240px]">
        <div className="flex flex-col space-y-1">
          <span className="text-sm font-medium text-gray-500">Contract Address</span>
          <span className="font-mono text-sm text-purple-600 truncate">
            0x4d2e5ec...e7a32b9
          </span>
        </div>
      </div>

      {/* 指标网格 */}
      <div className="flex-[2] w-full grid grid-cols-3 gap-4">
        <MetricCard label="Pump active rate" value="98.7%" trend="up" />
        <MetricCard label="Events" value="324 TPS" trend="stable" />
        <MetricCard label="Tasks" value="1.2K" trend="down" />
      </div>
    </div>
  )
}

function MetricCard({
  label,
  value,
  trend,
}: {
  label: string
  value: string
  trend: "up" | "down" | "stable"
}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{label}</span>
        <div className={cn(
          "h-2 w-2 rounded-full",
          trend === 'up' ? 'bg-green-400' : '',
          trend === 'down' ? 'bg-red-400' : '',
          trend === 'stable' ? 'bg-yellow-400' : ''
        )} />
      </div>
      <div className="text-xl font-semibold mt-2">{value}</div>
    </div>
  )
}