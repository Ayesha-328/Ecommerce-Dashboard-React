import { motion } from 'framer-motion'
import { DollarSign, Users, ShoppingBag, Eye, ArrowDownRight, ArrowUpRight } from "lucide-react";

import Navbar from '../components/Navbar'
import AnalyticsStatsCard from '../components/analytics/AnalyticsStatsCard';
import RevenueVsTargetChart from '../components/analytics/RevenueVsTargetChart';
import UserRelationChart from '../components/analytics/UserRelationChart';
import CustomerSegChart from '../components/analytics/CustomerSegChart';
import ChannelPerformanceChart from '../components/analytics/ChannelPerformanceChart';
import ProductPerformance from '../components/analytics/ProductPerformance';
import AIPoweredInsights from '../components/analytics/AIPoweredInsights';

const overviewData = [
	{ name: "Revenue", value: "$1,234,567", change: 12.5, icon: DollarSign },
	{ name: "Users", value: "45,678", change: 8.3, icon: Users },
	{ name: "Orders", value: "9,876", change: -3.2, icon: ShoppingBag },
	{ name: "Page Views", value: "1,234,567", change: 15.7, icon: Eye },
];

const Analytics = () => {
  return (
    <div className="flex-1 overflow-auto relative z-1">
    <Navbar title={'Analytics'} />

    <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
      {/* STATS */}
      {/* a slight animation of cards going from bottom to top on load */}
      <motion.div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
          {overviewData.map(data=>(
            <AnalyticsStatsCard 
            name={data.name}
            value={data.value}
            change={data.change}
            icon={data.icon}/>
          ))}
        
      </motion.div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
        <RevenueVsTargetChart />
        <ChannelPerformanceChart />
        <ProductPerformance />
        <UserRelationChart />
        <CustomerSegChart />
        <AIPoweredInsights />
      </div>

      

    </main>
  </div>
  )
}

export default Analytics