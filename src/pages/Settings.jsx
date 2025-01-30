import { motion } from "framer-motion"
import Navbar from '../components/Navbar'
import ProfileCard from "../components/settings/ProfileCard"
import NotificationCard from "../components/settings/NotificationCard"
import SecurityCard from "../components/settings/SecurityCard"
import LanguageRegionCard from "../components/settings/LanguageRegionCard"
import BillingCard from "../components/settings/BillingCard"
import ConnectedAccounts from "../components/settings/ConnectedAccounts"
import DangerZone from "../components/settings/DangerZone"

const Settings = () => {

  return (
    <div className="flex-1 overflow-auto relative z-1">
    <Navbar title={'Settings'} />

    <main className='max-w-5xl mx-auto py-6 px-4 lg:px-8'>
      {/* SETTINGS CARDS */}

      <ProfileCard />
      <NotificationCard />
      <SecurityCard />
      <LanguageRegionCard />
      <BillingCard />
      <ConnectedAccounts />
      <DangerZone />
      
     

      

    </main>
  </div>
  )
}

export default Settings