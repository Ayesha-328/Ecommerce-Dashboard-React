import {CreditCard } from "lucide-react"
import SettingsSection from "./SettingsSection"

const BillingCard = () => {
  return (
    <SettingsSection name={'Billing'} icon={CreditCard}>

      <div className="flex justify-between items-center text-gray-300 text-md mb-6">
        <span>Current Plan</span>
        <span className="font-bold text-lg text-indigo-400">Pro</span>
      </div>
      <button className="bg-indigo-600 hover:bg-indigo-700 transition duration-200 w-full sm:w-auto px-4 py-2 rounded-md font-semibold text-lg">Upgrade Plan</button>

    </SettingsSection>
  )
}

export default BillingCard