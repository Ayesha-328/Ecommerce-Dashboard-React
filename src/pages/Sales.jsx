import { motion } from 'framer-motion'
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";

import Navbar from '../components/Navbar'
import StatCard from '../components/StatCard'
import SalesChart from '../components/sales/SalesChart';
import SalesByCategoryChart from '../components/sales/SalesByCategoryChart';
import DailySalesTrendChart from '../components/sales/DailySalesTrendChart';

const Sales = () => {
  return (
    <div className="flex-1 overflow-auto relative z-1">
    <Navbar title={'Sales'} />

    <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
      {/* STATS */}
      {/* a slight animation of cards going from bottom to top on load */}
      <motion.div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <StatCard
          name="Total Revenue"
          icon={DollarSign}
          value="$12,345,678"
          color='#6366F1'
        />
        <StatCard
          name="Avg. Order Value"
          icon={ShoppingCart}
          value="$98.40"
          color='#10B981'
        />
        <StatCard
          name="Conversion Rate"
          icon={TrendingUp}
          value="3.45%"
          color='#F59E0B'
        />
        <StatCard
          name="Sales Growth"
          icon={CreditCard}
          value="10.5%"
          color='#EF4444'
        />
      </motion.div>

    
      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-8">
      <SalesChart />
      <SalesByCategoryChart />
      <DailySalesTrendChart />
      </div>
    </main>
  </div>
  )
}

export default Sales