import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const salesData = [
	{ month: "Jan", sales: 4000 },
	{ month: "Feb", sales: 3000 },
	{ month: "Mar", sales: 5000 },
	{ month: "Apr", sales: 4500 },
	{ month: "May", sales: 6000 },
	{ month: "Jun", sales: 5500 },
];

const SalesTrendChart = () => {
  return (
    <motion.div className="bg-gray-800 backdrop-blur-md shadow-lg p-6 border border-gray-700 rounded-xl bg-opacity-50"
    whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}>
    <h2 className='font-medium text-gray-100 text-xl mb-3'>Sales Trend</h2>

    <div className="h-80">
    <ResponsiveContainer width={"100%"} height={"100%"}>
                  <LineChart data={salesData}>
                      <CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
                      <XAxis dataKey={"month"} stroke='#9ca3af' />
                      <YAxis stroke='#9ca3af' />
                      <Tooltip
                          contentStyle={{
                              backgroundColor: "rgba(31, 41, 55, 0.8)",
                              borderColor: "#4B5563",
                          }}
                          itemStyle={{ color: "#E5E7EB" }}
                      />
                      <Line
                          type='monotone'
                          dataKey='sales'
                          stroke='#8B5CF6'
                          strokeWidth={2}
                        //   dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
                        //   activeDot={{ r: 8, strokeWidth: 2 }}
                      />
                  </LineChart>
              </ResponsiveContainer>
    </div>
  </motion.div>
  )
}

export default SalesTrendChart