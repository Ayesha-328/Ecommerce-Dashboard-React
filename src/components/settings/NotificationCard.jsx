import { Bell } from "lucide-react"
import SettingsSection from "./SettingsSection"
import { useState } from "react"
import ToggleSwitch from "./ToggleSwitch"

const NotificationCard = () => {
    const [notification , setNotification] = useState({
        push:true, 
        email: false,
        sms : true
    })
    
  return (
    <SettingsSection name={'Notifications'} icon={Bell}>
        
        <div className="flex flex-col space-y-6">
            <ToggleSwitch 
            label="Push Notifications"
            isOn={notification.push}
            onToggle={()=>setNotification({...notification, push: !notification.push})}
            />
            <ToggleSwitch 
            label="Email Notifications"
            isOn={notification.email}
            onToggle={()=>setNotification({...notification, email: !notification.email})}
            />
            <ToggleSwitch 
            label="SMS Notifications"
            isOn={notification.sms}
            onToggle={()=>setNotification({...notification, sms: !notification.sms})}
            />
           
        </div>

    </SettingsSection>
  )
}

export default NotificationCard