import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";



const AnalyticsStatsCard = ({ name, value, change, icon: Icon }) => {
    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg overflow-hidden rounded-xl border border-gray-700'
            whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
            <div className="px-4 py-5 sm:p-6">
                <div className="flex justify-between items-center">
                    <span className='flex flex-col text-sm font-medium text-gray-400'>
                        {name}
                        <p className="mt-1 text-3xl font-semibold text-gray-100">{value}</p>
                    </span>
                    <div className={`p-3 rounded-full bg-opacity-20 ${change > 0 ? 'bg-green-500' : "bg-red-500"}`}>
                        <Icon className={`size-6 ${change>0 ? 'text-green-500': 'text-red-500'}`}/>
                    </div>
                </div>
                <div className="flex gap-x-2 text-sm py-2 mt-2">
                    <span className={`flex items-center gap-x-1 font-bold ${change > 0 ? "text-green-400" : "text-red-400"}`}>
                        {change > 0 ?
                            <ArrowUpRight size={17} />
                            : 
                            <ArrowDownRight size={17} />
                        }
                        {change}%
                    </span>
                    <span className="text-gray-400">
                        vs last period
                    </span>
                </div>

            </div>
        </motion.div>
    )
}

export default AnalyticsStatsCard