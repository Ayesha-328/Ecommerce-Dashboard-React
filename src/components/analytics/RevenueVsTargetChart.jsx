import { motion } from 'framer-motion'
import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const revenueData = [
	{ month: "Jan", revenue: 4000, target: 3800 },
	{ month: "Feb", revenue: 3000, target: 3200 },
	{ month: "Mar", revenue: 5000, target: 4500 },
	{ month: "Apr", revenue: 4500, target: 4200 },
	{ month: "May", revenue: 6000, target: 5500 },
	{ month: "Jun", revenue: 5500, target: 5800 },
	{ month: "Jul", revenue: 7000, target: 6500 },
];

const RevenueVsTargetChart = () => {
    const [selectedTimeRange, setSelectedTimeRange] = useState("This month")
    return (
      <motion.div className="bg-gray-800 backdrop-blur-md shadow-lg p-6 border lg:col-span-2 border-gray-700 rounded-xl bg-opacity-50"
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}>
        <div className="flex items-center justify-between mb-6">
      <h2 className='font-medium text-gray-100 text-xl mb-4'>Revenue vs Target</h2>
  
      <select 
      className='bg-gray-700 text-white rounded-md text-sm px-3 py-1 focus:outline-none focus:ring-2 foucs:ring-blue-500'
      value={revenueData}
      onChange={(e)=> setSelectedTimeRange(e.target.value)}
      >
        <option value="This Week">This Week</option>
        <option value="This Month">This Month</option>
        <option value="This Quater">This Quater</option>
        <option value="This Year">This Year</option>
      </select>
  
        </div>
  
      <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={revenueData}
          > 
            <CartesianGrid strokeDasharray="3 3" stroke='#4B5563'/>
            <XAxis dataKey="month" stroke='#9ca3af'  />
            <YAxis stroke='#9ca3af'/>
            <Tooltip 
            contentStyle={{
              backgroundColor: "rgba(31, 41, 55, 0.8)",
              borderColor: "#4B5563",
          }}
          itemStyle={{ color: "#E5E7EB" }}
          />
            <Area type="monotone" dataKey="revenue" stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.3} />
            <Area type="monotone" dataKey="target" stroke='#10B981' fill='#10B981' fillOpacity={0.3} />
           
          </AreaChart>
        </ResponsiveContainer>
  
      </div>
      </motion.div>
    )
}

export default RevenueVsTargetChart