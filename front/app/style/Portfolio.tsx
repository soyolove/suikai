// components/PortfolioCard.tsx
'use client'
import { Pie } from '@visx/shape'
import { Group } from '@visx/group'
import { Text } from '@visx/text'
import { scaleOrdinal } from '@visx/scale'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
import { Bitcoin, Coins, Wallet } from 'lucide-react'
import { useMemo } from 'react'

const COLORS = [
  '#f59e0b', // BTC
  '#3b82f6', // ETH
  '#10b981', // BNB
  '#8b5cf6', // SOL
  '#ef4444'  // CASH
]

interface Holding {
  symbol: string
  name: string
  percentage: number
  price: number
  change: number
}

export default function PortfolioCard() {
  const holdings: Holding[] = useMemo(() => [
    { symbol: 'BTC', name: 'Bitcoin', percentage: 45, price: 34256.5, change: +2.4 },
    { symbol: 'ETH', name: 'Ethereum', percentage: 28, price: 1843.2, change: -1.2 },
    { symbol: 'BNB', name: 'BNB', percentage: 12, price: 302.5, change: +0.8 },
    { symbol: 'SOL', name: 'Solana', percentage: 9, price: 98.7, change: +5.3 },
    { symbol: 'CASH', name: 'Stablecoins', percentage: 6, price: 1.0, change: 0 }
  ], [])

  const colorScale = scaleOrdinal({
    domain: holdings.map(h => h.symbol),
    range: COLORS
  })

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow h-full">
      {/* 紧凑头部 */}
      <div className="grid grid-cols-[1fr_auto] items-center gap-2 mb-4">
        <div className="flex items-center gap-2">
          <Wallet className="text-purple-500 w-5 h-5" />
          <div>
            <h2 className="text-lg font-semibold leading-tight">Portfolio</h2>
            <p className="text-xs text-gray-500">$250,345.00</p>
          </div>
        </div>
        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
          5m ago
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 h-[280px]">
        {/* 紧凑饼图 */}
        <div className="w-full lg:w-1/3 h-[140px] lg:h-full">
          <ParentSize>
            {({ width, height }) => (
              <svg width={width} height={height}>
                <Group top={height/2} left={width/2}>
                  <Pie
                    data={holdings}
                    pieValue={d => d.percentage}
                    outerRadius={Math.min(width, height) * 0.35}
                    innerRadius={Math.min(width, height) * 0.25}
                    cornerRadius={1}
                    padAngle={0.02}
                  >
                    {(pie) => pie.arcs.map((arc, index) => (
                      <g key={arc.data.symbol}>
                        <path
                          d={pie.path(arc) || ''}
                          fill={colorScale(arc.data.symbol)}
                          stroke="#ffffff"
                          strokeWidth={0.5}
                        />
                        {arc.data.percentage > 8 && (
                          <Text
                            x={pie.path.centroid(arc)[0]}
                            y={pie.path.centroid(arc)[1]}
                            fill="white"
                            textAnchor="middle"
                            verticalAnchor="middle"
                            fontSize={10}
                            fontWeight={500}
                          >
                            {`${arc.data.percentage}%`}
                          </Text>
                        )}
                      </g>
                    ))}
                  </Pie>
                </Group>
              </svg>
            )}
          </ParentSize>
        </div>

        {/* 紧凑持仓列表 */}
        <div className="flex-1 overflow-y-auto pr-2">
          {holdings.map((holding, index) => (
            <div key={holding.symbol} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md">
              <div className="flex-shrink-0">
                <div 
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: COLORS[index] }}
                >
                  {holding.symbol === 'BTC' ? (
                    <Bitcoin className="text-white w-3 h-3" />
                  ) : (
                    <Coins className="text-white w-3 h-3" />
                  )}
                </div>
              </div>

              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium truncate">{holding.name}</span>
                  <span className="text-xs font-mono">{holding.percentage}%</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="text-xs text-gray-500">
                    ${holding.price.toLocaleString(undefined, {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0
                    })}
                  </span>
                  <span className={`text-xs ${
                    holding.change >= 0 ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {holding.change >= 0 ? '+' : ''}{holding.change}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div 
                    className="h-1 rounded-full transition-all duration-500" 
                    style={{ 
                      width: `${holding.percentage}%`,
                      backgroundColor: COLORS[index]
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
