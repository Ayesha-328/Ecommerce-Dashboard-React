import { Radar, RadarChart, Legend, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion'

const customerSegmentationData = [
	{ subject: "Engagement", A: 120, B: 110, fullMark: 150 },
	{ subject: "Loyalty", A: 98, B: 130, fullMark: 150 },
	{ subject: "Satisfaction", A: 86, B: 130, fullMark: 150 },
	{ subject: "Spend", A: 99, B: 100, fullMark: 150 },
	{ subject: "Frequency", A: 85, B: 90, fullMark: 150 },
	{ subject: "Recency", A: 65, B: 85, fullMark: 150 },
];

const CustomerSegChart = () => {
  return (
    <motion.div className="bg-gray-800 backdrop-blur-md shadow-lg p-6 border border-gray-700 rounded-xl bg-opacity-50"
    whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}>
    <h2 className='font-medium text-gray-100 text-xl'>Category Distribution</h2>

    <div className="h-80">
    <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={customerSegmentationData}>
          <PolarGrid stroke='#9ca3af'/>
          <PolarAngleAxis dataKey="subject" stroke='#9ca3af' />
          <PolarRadiusAxis angle={30} domain={[0, 150]} stroke='#9ca3af'/>
          <Legend />
          <Radar name="Segment A" dataKey="A" stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.6} />
          <Radar name="Segment B" dataKey="B" stroke='#10B981' fill='#10B981' fillOpacity={0.6} />
          <Tooltip 
          contentStyle={{
            backgroundColor: "rgba(31, 41, 55, 0.8)",
            borderColor: "#4B5563",
        }}
        itemStyle={{ color: "#E5E7EB" }}
        />
        </RadarChart>
      </ResponsiveContainer>

    </div>
    </motion.div>
  )
}

export default CustomerSegChart