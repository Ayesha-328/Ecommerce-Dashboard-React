import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const productPerformanceData = [
	{ name: "Product A", sales: 4000, revenue: 2400, profit: 2400 },
	{ name: "Product B", sales: 3000, revenue: 1398, profit: 2210 },
	{ name: "Product C", sales: 2000, revenue: 9800, profit: 2290 },
	{ name: "Product D", sales: 2780, revenue: 3908, profit: 2000 },
	{ name: "Product E", sales: 1890, revenue: 4800, profit: 2181 },
];

const ProductPerformance = () => {
  return (
    <motion.div className="bg-gray-800 backdrop-blur-md shadow-lg p-6 border border-gray-700 rounded-xl bg-opacity-50"
    whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}>
    <h2 className='font-medium text-gray-100 text-xl mb-3'>User Growth</h2>

    <div className="h-80">
    <ResponsiveContainer width={"100%"} height={"100%"}>
                  <BarChart data={productPerformanceData}>
                      <CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
                      <XAxis dataKey={"name"} stroke='#9ca3af' />
                      <YAxis stroke='#9ca3af' />
                      <Tooltip
                          contentStyle={{
                              backgroundColor: "rgba(31, 41, 55, 0.8)",
                              borderColor: "#4B5563",
                          }}
                          itemStyle={{ color: "#E5E7EB" }}
                      />
                      <Legend />
                      <Bar dataKey='sales' fill='#8B5CF6' />
						<Bar dataKey='revenue' fill='#10B981' />
						<Bar dataKey='profit' fill='#F59E0B' />
                  </BarChart>
              </ResponsiveContainer>
    </div>
  </motion.div>
  )
}

export default ProductPerformance