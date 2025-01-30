import { motion } from 'framer-motion'
import { ShoppingBag, Zap ,Users, BarChart2} from 'lucide-react'

import Navbar from '../components/Navbar'
import StatCard from '../components/StatCard'
import SalesOverviewChart from '../components/overview/SalesOverviewChart'
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart'
import SalesChannelChart from '../components/overview/SalesChannelChart'

const Overview = () => {
  return (
    <div className="flex-1 overflow-auto relative z-1">
      <Navbar title={'Overview'} />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* STATS */}
        {/* a slight animation of cards going from bottom to top on load */}
        <motion.div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <StatCard
            name="Total Sales"
            icon={Zap}
            value="$123,798"
            color='#6366F1'
          />
          <StatCard
            name="New Users"
            icon={Users}
            value="1,234"
            color='#8b5cf6'
          />
          <StatCard
            name="Total Products"
            icon={ShoppingBag}
            value="789"
            color='#ec4899'
          />
          <StatCard
            name="Conversion Rate"
            icon={BarChart2}
            value="$12.5%"
            color='#10b981'
          />
        </motion.div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
          <SalesOverviewChart />
          <CategoryDistributionChart />
        </div>
        <div className="grid grid-cols-1 mb-8">
          <SalesChannelChart />
        </div>

      </main>
    </div>
  )
}

export default Overview