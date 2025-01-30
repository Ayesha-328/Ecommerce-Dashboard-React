import SettingsSection from "./SettingsSection"
import ToggleSwitch from "./ToggleSwitch"
import { Lock } from "lucide-react"
import { useState } from "react"

const SecurityCard = () => {
    const[twoFactorAuth, setTwoFactorAuth] = useState(false)
  return (
    <SettingsSection name={'Security'} icon={Lock}>
        <ToggleSwitch 
        label={'Two-Factor Authentication'}
        isOn={twoFactorAuth}
        onToggle={()=>setTwoFactorAuth(prev=> !prev)}
        />

        <button className="bg-indigo-600 hover:bg-indigo-700 transition duration-200 w-full sm:w-auto px-4 py-2 rounded-md font-semibold text-lg mt-6">Change Password</button>

    </SettingsSection>
  )
}

export default SecurityCard