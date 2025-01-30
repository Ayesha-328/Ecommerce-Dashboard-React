import { User } from "lucide-react"
import SettingsSection from "./SettingsSection"

const ProfileCard = () => {
  return (
    <SettingsSection name={'Profile'} icon={User}>
        <div className="flex items-center gap-x-3 mb-4">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Profile Pic"  className="size-24 rounded-full"/>

            <div className="flex flex-col justify-center">
                <span className="text-gray-300 font-semibold text-xl">Ayesha Najeeb</span>
                <span className="text-gray-400 text-md">ayeshanajeeb@gmail.com</span>
            </div>
              
        </div>

        <button className="bg-indigo-600 hover:bg-indigo-700 transition duration-200 w-full sm:w-auto px-4 py-2 rounded-md font-semibold text-lg">Edit Profile</button>

    </SettingsSection>
  )
}

export default ProfileCard