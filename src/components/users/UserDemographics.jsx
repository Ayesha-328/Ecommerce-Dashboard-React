import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'


const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#0088FE"];

const userDemographicsData = [
	{ name: "18-24", value: 20 },
	{ name: "25-34", value: 30 },
	{ name: "35-44", value: 25 },
	{ name: "45-54", value: 15 },
	{ name: "55+", value: 10 },
];

const UserDemographics = () => {
  return (
    <motion.div className="bg-gray-800 backdrop-blur-md shadow-lg lg:col-span-2 p-6 border border-gray-700 rounded-xl bg-opacity-50"
    whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}>
    <h2 className='font-medium text-gray-100 text-xl'>User Demographics</h2>

    <div className="h-80">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={userDemographicsData}
          cx="50%" //position x from center
          cy="50%"
          labelLine={false}
          label={({name, percent})=> `${name} ${(percent* 100).toFixed(0)}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {userDemographicsData.map((entry, index) => (
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

export default UserDemographics