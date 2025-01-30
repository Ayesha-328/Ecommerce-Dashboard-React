import { motion } from "framer-motion"

const SettingsSection = ({name, icon:Icon , children}) => {
  return (
    <motion.div className="bg-gray-800 backdrop-blur-md shadow-lg p-6 border border-gray-700 rounded-xl bg-opacity-50 mb-7"
      // whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}>
        <div className="flex items-center gap-x-3 mb-6">
          <Icon size={25} className='text-indigo-400'/>
      <h2 className='font-semibold text-gray-100 text-xl'>{name}</h2>

        </div>
        {children}

      
  
    </motion.div>
  )
}

export default SettingsSection