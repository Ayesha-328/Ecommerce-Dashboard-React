import { motion } from 'framer-motion'
import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";

import Navbar from '../components/Navbar'
import StatCard from '../components/StatCard'
import DailyOrdersChart from '../components/orders/DailyOrdersChart'
import OrderStatusDistributionChart from '../components/orders/OrderStatusDistributionChart'
import OrderList from '../components/orders/OrderList'

const Orders = () => {
  return (
    <div className="flex-1 overflow-auto relative z-1">
    <Navbar title={'Orders'} />

    <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
      {/* STATS */}
      {/* a slight animation of cards going from bottom to top on load */}
      <motion.div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <StatCard
          name="Total Orders"
          icon={ShoppingBag}
          value="1,678"
          color='#6366F1'
        />
        <StatCard
          name="Pending Orders"
          icon={Clock}
          value="1,234"
          color='#F59E0B'
        />
        <StatCard
          name="Completed Orders"
          icon={CheckCircle}
          value="1,167"
          color='#10b981'
        />
        <StatCard
          name="Total Revenue"
          icon={DollarSign}
          value="$34,789"
          color='#ec4899'
        />
      </motion.div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
        <DailyOrdersChart />
        <OrderStatusDistributionChart />
      </div>
      {/* TABLE */}
      <div className="grid grid-cols-1 mb-8">
        <OrderList />
      </div>

    </main>
  </div>
  )
}

export default Orders