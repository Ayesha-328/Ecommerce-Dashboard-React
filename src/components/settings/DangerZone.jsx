import { motion } from "framer-motion"
import { Trash2 } from "lucide-react"

const DangerZone = () => {
  return (
    <motion.div className="bg-red-600 backdrop-blur-md shadow-lg p-6 border border-red-700 rounded-xl bg-opacity-30 mb-7"
      // whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}>
        <div className="flex items-center gap-x-3 mb-4">
          <Trash2 size={25} className='text-red-300'/>
      <h2 className='font-semibold text-gray-100 text-xl'>Danger Zone</h2>

        </div>

        <p className="text-gray-300 text-md mb-5">Permanantly delete your account and all your content.</p>

        <button className="bg-red-600 hover:bg-red-700 transition duration-200 w-full sm:w-auto px-4 py-2 rounded-md font-semibold text-lg">Delete Account</button>
   

      
  
    </motion.div>
  )
}

export default DangerZone