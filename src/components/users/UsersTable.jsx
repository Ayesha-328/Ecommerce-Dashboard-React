import { motion } from "framer-motion"
import { Edit, Search, Trash2 } from "lucide-react"
import { useState } from "react";

const userData = [
	{ id: 1, name: "John Doe", email: "john@example.com", role: "Customer", status: "Active" },
	{ id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Active" },
	{ id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Customer", status: "Inactive" },
	{ id: 4, name: "Alice Brown", email: "alice@example.com", role: "Customer", status: "Active" },
	{ id: 5, name: "Charlie Wilson", email: "charlie@example.com", role: "Moderator", status: "Active" },
];

const UsersTable = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredUsers, setFilteredUsers] = useState(userData)

    const handleSearchTerm = (e) =>{
        const term=e.target.value.toLowerCase();
        setSearchTerm(term);
        const filteredUsers = userData.filter(user=> user.name.toLowerCase().includes(term) || user.role.toLowerCase().includes(term) || user.status.toLowerCase().includes(term))
        setFilteredUsers(filteredUsers)
    }

  return (
    <motion.div className="bg-gray-800 backdrop-blur-md shadow-lg p-6 border border-gray-700 rounded-xl bg-opacity-50"
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}>


            <div className="flex justify-between items-center mb-6">
                <div className="text-xl font-semibold text-gray-100">Users List</div>
                <div className="relative">
                    <input type="text" placeholder="Search users..." onChange={handleSearchTerm} value={searchTerm} className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />

                </div>
            </div>
            <div className="overflow-x-auto">

                <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">NAME</th>

                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Email</th>

                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Role</th>

                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>

                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-700">
{filteredUsers.map((user)=>(
    <motion.tr key={user.id}
    initial={{opacity:0 }}
    animate={{opacity:1}}
    transition={{duration:0.3}}>

        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
            <img 
            className="size-10 rounded-full"
            src="https://www.vhv.rs/dpng/d/436-4363443_view-user-icon-png-font-awesome-user-circle.png" alt="User profile img" />
            {user.name}
        </td>

        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{user.email}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300"><span className="px-2 leading-5 inline-flex font-semibold rounded-full text-white bg-blue-800 text-sm text-blue-100">{user.role}</span></td>
        <td className={`px-6 py-4 whitespace-nowrap text-sm text-gray-300`}>
            <span className={`${user.status.toLowerCase()==="active" ? "bg-green-700": "bg-red-500"} text-sm px-2 inline-flex font-semibold rounded-full text-white `}>{user.status}</span></td>

        <td className="px-6 py-0.5 whitespace-nowrap text-sm text-gray-300"> 
            <button className="text-indigo-400 hover:text-indigo-300 mr-2">
            Edit
            </button>
            <button className="text-red-400 hover:text-red-300 mr-2">
        Delete
            </button>
        </td>
        
    </motion.tr>
))}
                    </tbody>
                </table>
            </div>
        </motion.div>
  )
}

export default UsersTable