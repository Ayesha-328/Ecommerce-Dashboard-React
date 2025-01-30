import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const dailySalesData = [
	{ name: "Mon", sales: 1000 },
	{ name: "Tue", sales: 1200 },
	{ name: "Wed", sales: 900 },
	{ name: "Thu", sales: 1100 },
	{ name: "Fri", sales: 1300 },
	{ name: "Sat", sales: 1600 },
	{ name: "Sun", sales: 1400 },
];

const DailySalesTrendChart = () => {
  return (
    <motion.div className="bg-gray-800 backdrop-blur-md shadow-lg p-6 border border-gray-700 rounded-xl bg-opacity-50"
    whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}>
    <h2 className='font-medium text-gray-100 text-xl mb-3'>User Growth</h2>

    <div className="h-80">
    <ResponsiveContainer width={"100%"} height={"100%"}>
                  <BarChart data={dailySalesData}>
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
                    
                     <Bar dataKey='sales' stackId='a' fill='#10B981' />
	
                  </BarChart>
              </ResponsiveContainer>
    </div>
  </motion.div>
  )
}

export default DailySalesTrendChart