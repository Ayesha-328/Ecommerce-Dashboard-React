import { CircleHelp ,Plus} from 'lucide-react'
import SettingsSection from './SettingsSection'
import { useState } from 'react';

const ConnectedAccounts = () => {
    const [connectedAccounts, setConnectedAccounts] = useState([
		{
			id: 1,
			name: "Google",
			connected: true,
			icon: "/google.png",
		},
		{
			id: 2,
			name: "Facebook",
			connected: false,
			icon: "/facebook.svg",
		},
		{
			id: 3,
			name: "Twitter",
			connected: true,
			icon: "/x.png",
		},
	]);
  return (
    <SettingsSection name={'Connected Accounts'} icon={CircleHelp}>
        <div className="flex flex-col space-y-6">
        {connectedAccounts.map(account=>(
            <div className="flex justify-between items-center">
                <div className="flex space-x-3 items-center">
                    <img src={account.icon} alt="icon" className='size-8 rounded-full'/>
                    <span className='text-md text-gray-300'>{account.name}</span>
                </div>

                <button className={`transition duration-200 w-auto px-4 py-2 rounded font-semibold text-md
                    ${account.connected ? "bg-green-500 hover:bg-green-600" : "bg-gray-500 hover:bg-gray-600"}`}>
                    {account.connected ? "Connected" : "Connect"}
                    </button>

            </div>
        ))}
                    <div className="flex items-center space-x-2 text-indigo-400">
                        <Plus size={20}/>
                        <span className='font-semibold'>Add Account</span>
                    </div>

        </div>

    

  </SettingsSection>
  )
}

export default ConnectedAccounts