import { motion } from "framer-motion"
import { TrendingUp, Users, ShoppingBag, DollarSign } from "lucide-react";

const INSIGHTS = [
	{
		icon: TrendingUp,
		color: "text-green-500",
		insight: "Revenue is up 15% compared to last month, driven primarily by a successful email campaign.",
	},
	{
		icon: Users,
		color: "text-blue-500",
		insight: "Customer retention has improved by 8% following the launch of the new loyalty program.",
	},
	{
		icon: ShoppingBag,
		color: "text-purple-500",
		insight: 'Product category "Electronics" shows the highest growth potential based on recent market trends.',
	},
	{
		icon: DollarSign,
		color: "text-yellow-500",
		insight: "Optimizing pricing strategy could potentially increase overall profit margins by 5-7%.",
	},
];

const AIPoweredInsights = () => {
  return (
    <motion.div className="bg-gray-800 backdrop-blur-md shadow-lg p-6 border lg:col-span-2 border-gray-700 rounded-xl bg-opacity-50"
    whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}>
     
    <h2 className='font-medium text-gray-100 text-xl mb-4'>AI-Powered Insights</h2>

    <div className="flex flex-col gap-6">
        {INSIGHTS.map(data =>(
            <div className="flex items-center gap-x-4">
                <data.icon size={20} className={`${data.color}`}  />
                <span className="text-sm text-gray-300">{data.insight}</span>
            </div>
        ))}
    </div>

    </motion.div>
  )
}

export default AIPoweredInsights