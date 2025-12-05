import { motion } from 'framer-motion'
import { useState } from 'react'

interface AnimatedArchitectureDiagramProps {
  onComplete?: () => void
}

export function AnimatedArchitectureDiagram({
  onComplete,
}: AnimatedArchitectureDiagramProps) {
  const [currentStep, setCurrentStep] = useState(-1)

  const steps = [
    { id: 'quickbooks', name: 'QuickBooks Data Source' },
    { id: 'haulink', name: 'Haulink System' },
    { id: 'connection1', name: 'Data Connections' },
    { id: 'bi-layer', name: 'BI Processing Layer' },
    { id: 'charts', name: 'Analytics & Reports' },
    { id: 'connection2', name: 'Output Connections' },
    { id: 'excel', name: 'Excel Exports' },
    { id: 'api', name: 'API Integration' },
  ]

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onComplete?.()
    }
  }

  const resetDiagram = () => {
    setCurrentStep(-1)
  }

  return (
    <div className="flex flex-col items-center w-full space-y-3">
      {/* Control Panel */}
      <div className="flex items-center p-2 space-x-2 bg-white border rounded shadow-sm">
        <button
          onClick={handleNextStep}
          disabled={currentStep >= steps.length - 1}
          className="px-2 py-1 bg-[#00FF00] text-black text-sm font-medium rounded hover:bg-[#00DD00] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {currentStep < steps.length - 1
            ? `Next: ${steps[currentStep + 1]?.name || 'Complete'}`
            : 'Complete'}
        </button>
        <button
          onClick={resetDiagram}
          className="px-2 py-1 text-sm font-medium text-white transition-colors bg-gray-500 rounded hover:bg-gray-600"
        >
          Reset
        </button>
        <span className="text-xs text-gray-600">
          {currentStep + 1}/{steps.length}
        </span>
      </div>

      <div className="relative w-[750px] h-[700px] bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg">
        {/* Clean background */}
        <div className="absolute inset-0 bg-linear-to-br from-gray-50 to-white" />

        {/* QuickBooks Cloud */}
        {currentStep >= 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute z-10 top-12 left-12"
          >
            <div className="p-6 bg-white border-2 border-blue-300 border-dashed shadow-lg rounded-2xl">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-lg">
                  <span className="text-lg font-bold text-white">$</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    QuickBooks
                  </h3>
                  <p className="text-sm text-gray-600">Financial Data</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Haulink System */}
        {currentStep >= 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute z-10 top-12 right-12"
          >
            <div className="p-6 bg-white border-2 border-green-400 border-dashed shadow-lg rounded-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#00FF00] rounded-lg flex items-center justify-center">
                  <div className="flex flex-col w-6 h-6 bg-white rounded-sm">
                    <div className="flex-1 bg-[#00FF00] m-0.5 rounded-xs"></div>
                    <div className="flex space-x-0.5 p-0.5">
                      <div className="w-1 h-1 bg-[#00FF00] rounded-full"></div>
                      <div className="w-1 h-1 bg-[#00FF00] rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Haulink</h3>
                  <p className="text-sm text-gray-600">Operations Data</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Connections from sources to BI */}
        {currentStep >= 2 && (
          <motion.svg
            width="100%"
            height="100%"
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* QuickBooks to BI */}
            <motion.path
              d="M 200 120 Q 300 200 350 280"
              fill="none"
              stroke="#00FF00"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="8,4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
            {/* Haulink to BI */}
            <motion.path
              d="M 500 120 Q 450 200 400 280"
              fill="none"
              stroke="#00FF00"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="8,4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }}
            />

            {/* Animated data flow dots */}
            <motion.circle
              r="4"
              fill="#00FF00"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 2 }}
            >
              <animateMotion dur="3s" repeatCount="indefinite">
                <path d="M 200 120 Q 300 200 350 280" />
              </animateMotion>
            </motion.circle>

            <motion.circle
              r="4"
              fill="#00FF00"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
            >
              <animateMotion dur="3s" repeatCount="indefinite">
                <path d="M 500 120 Q 450 200 400 280" />
              </animateMotion>
            </motion.circle>
          </motion.svg>
        )}

        {/* BI Layer */}
        {currentStep >= 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          >
            <div
              className="bg-white p-8 rounded-3xl border-3 border-[#00FF00] shadow-xl
            "
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-[#00FF00] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-black text-black">BI</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Business Intelligence
                </h3>
                <p className="text-sm text-gray-600">Data Processing Hub</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Charts and Analytics */}
        {currentStep >= 4 && (
          <>
            {/* Bar Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute top-40 left-20"
            >
              <div className="p-4 bg-white border-2 border-blue-200 shadow-lg rounded-xl">
                <svg width="100" height="80">
                  <rect
                    x="15"
                    y="60"
                    width="12"
                    height="15"
                    fill="#3B82F6"
                    rx="2"
                  />
                  <rect
                    x="32"
                    y="45"
                    width="12"
                    height="30"
                    fill="#10B981"
                    rx="2"
                  />
                  <rect
                    x="49"
                    y="55"
                    width="12"
                    height="20"
                    fill="#F59E0B"
                    rx="2"
                  />
                  <rect
                    x="66"
                    y="35"
                    width="12"
                    height="40"
                    fill="#EF4444"
                    rx="2"
                  />
                  <text
                    x="50"
                    y="25"
                    textAnchor="middle"
                    className="text-xs font-semibold fill-gray-700"
                  >
                    Analytics
                  </text>
                </svg>
              </div>
            </motion.div>

            {/* Pie Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-40 right-20"
            >
              <div className="p-4 bg-white border-2 border-orange-200 shadow-lg rounded-xl">
                <svg width="80" height="80">
                  <circle
                    cx="40"
                    cy="45"
                    r="25"
                    fill="#F3F4F6"
                    stroke="#E5E7EB"
                    strokeWidth="2"
                  />
                  <path d="M40 20 A25 25 0 0 1 60 35 L40 45 Z" fill="#3B82F6" />
                  <path d="M60 35 A25 25 0 0 1 50 65 L40 45 Z" fill="#EF4444" />
                  <path d="M50 65 A25 25 0 0 1 40 20 L40 45 Z" fill="#10B981" />
                  <text
                    x="40"
                    y="15"
                    textAnchor="middle"
                    className="text-xs font-semibold fill-gray-700"
                  >
                    Reports
                  </text>
                </svg>
              </div>
            </motion.div>
          </>
        )}

        {/* Connections from BI to outputs */}
        {currentStep >= 5 && (
          <motion.svg
            width="100%"
            height="100%"
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* BI to Excel */}
            <motion.path
              d="M 320 420 Q 250 500 160 580"
              fill="none"
              stroke="#00FF00"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="6,3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            />
            {/* BI to API */}
            <motion.path
              d="M 420 420 Q 480 500 540 580"
              fill="none"
              stroke="#00FF00"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="6,3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            />

            {/* Output flow dots */}
            <motion.circle
              r="3"
              fill="#00FF00"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 3 }}
            >
              <animateMotion dur="2.5s" repeatCount="indefinite">
                <path d="M 320 420 Q 250 500 160 580" />
              </animateMotion>
            </motion.circle>

            <motion.circle
              r="3"
              fill="#00FF00"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 3.3 }}
            >
              <animateMotion dur="2.5s" repeatCount="indefinite">
                <path d="M 420 420 Q 480 500 540 580" />
              </animateMotion>
            </motion.circle>
          </motion.svg>
        )}

        {/* Excel Output */}
        {currentStep >= 6 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-16 left-16"
          >
            <div className="p-6 bg-white border-2 border-green-400 shadow-lg rounded-2xl">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-lg">
                  <div className="grid grid-cols-3 gap-0.5">
                    <div className="w-1 h-1 bg-white rounded-xs"></div>
                    <div className="w-1 h-1 bg-white rounded-xs"></div>
                    <div className="w-1 h-1 bg-white rounded-xs"></div>
                    <div className="w-1 h-1 bg-white rounded-xs"></div>
                    <div className="w-1 h-1 bg-white rounded-xs"></div>
                    <div className="w-1 h-1 bg-white rounded-xs"></div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Excel</h4>
                  <p className="text-sm text-gray-600">Exports</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* API Box */}
        {currentStep >= 7 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-16 right-16"
          >
            <div className="p-6 bg-white border-2 border-purple-400 border-dashed shadow-lg rounded-2xl">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-purple-500 rounded-lg">
                  <span className="text-sm font-bold text-white">API</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800">API</h4>
                  <p className="text-sm text-gray-600">Integration</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
