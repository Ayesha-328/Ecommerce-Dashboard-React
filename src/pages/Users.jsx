import { motion } from 'framer-motion'
import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";

import Navbar from '../components/Navbar'
import StatCard from '../components/StatCard'
import UserGrowthChart from '../components/users/UserGrowthChart';
import UserDemographics from '../components/users/UserDemographics';
import UserActivityHeatmap from '../components/users/UserActivityHeatmap';
import UsersTable from '../components/users/UsersTable';

const Users = () => {
    return (
      <div className="flex-1 overflow-auto relative z-1">
      <Navbar title={'Users'} />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* STATS */}
        {/* a slight animation of cards going from bottom to top on load */}
        <motion.div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <StatCard
            name="Total Users"
            icon={UsersIcon}
            value="152,378"
            color='#6366F1'
          />
          <StatCard
            name="New Users Today"
            icon={UserPlus}
            value="56"
            color='#10B981'
          />
          <StatCard
            name="Active Users"
            icon={UserCheck}
            value="67,457"
            color='#F59E0B'
          />
          <StatCard
            name="Churn Rate"
            icon={UserX}
            value="2.6%"
            color='#EF4444'
          />
        </motion.div>

        {/* TABLE */}
        <UsersTable />

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-8">
        <UserGrowthChart />
        <UserActivityHeatmap />
        <UserDemographics />
        </div>
      </main>
    </div>
    )
}

export default Users