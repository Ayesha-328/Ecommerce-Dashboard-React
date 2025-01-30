import { Globe } from "lucide-react"
import SettingsSection from "./SettingsSection"
import { useState } from "react"

const LanguageRegionCard = () => {
  const [language, setLanguage] = useState("English")
  const [currency, setCurrency] = useState("USD")
  return (
    <SettingsSection name={'Language & Region'} icon={Globe}>

      <div className="flex flex-col space-y-6">
        <div className="flex justify-between items-center text-gray-300 text-md">
          <span>Language</span>

          <select
            className='bg-gray-700 text-white rounded-md text-sm px-3 py-1 focus:outline-none focus:ring-2 foucs:ring-blue-500'
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="English">English</option>
            <option value="Turkish">Turkish</option>
            <option value="Arabic">Arabic</option>
            <option value="Urdu">Urdu</option>
          </select>
        </div>

        <div className="flex justify-between items-center text-gray-300 text-md">
          <span>Currency</span>

          <select
            className='bg-gray-700 text-white rounded-md text-sm px-3 py-1 focus:outline-none focus:ring-2 foucs:ring-blue-500'
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="TLR">TLR</option>
            <option value="SAR">SAR</option>
            <option value="PKR">PKR</option>
          </select>
        </div>


      </div>

    </SettingsSection>
  )
}

export default LanguageRegionCard