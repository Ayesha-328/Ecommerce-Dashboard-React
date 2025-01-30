import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const channelData = [
	{ name: "Organic Search", value: 4000 },
	{ name: "Paid Search", value: 3000 },
	{ name: "Direct", value: 2000 },
	{ name: "Social Media", value: 2780 },
	{ name: "Referral", value: 1890 },
	{ name: "Email", value: 2390 },
];
const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE", "#00C49F"];

const ChannelPerformanceChart = () => {
  return (
    <motion.div className="bg-gray-800 backdrop-blur-md shadow-lg p-6 border border-gray-700 rounded-xl bg-opacity-50"
    whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}>
    <h2 className='font-medium text-gray-100 text-xl mb-3'>Channel Performance</h2>

    <div className="h-80">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={channelData}
          cx="50%" //position x from center
          cy="50%"
          label={({name, percent})=> `${name} ${(percent* 100).toFixed(0)}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {channelData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip 
        contentStyle={{
          backgroundColor: "rgba(31, 41, 55, 0.8)",
          borderColor: "#4B5563",
      }}
      itemStyle={{ color: "#E5E7EB" }}
      />
      <Legend />
      </PieChart>
    </ResponsiveContainer>

    </div>
    </motion.div>
  )
}

export default ChannelPerformanceChart