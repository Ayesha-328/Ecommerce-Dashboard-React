import { BarChart2, DollarSign, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users } from "lucide-react";
import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { span } from "framer-motion/client";
import { AnimatePresence } from "framer-motion";
const SIDEBAR_ITEMS= [
    {name:"Overview", icon: BarChart2, color:"#6366f1", href:"/"},
    { name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
	{ name: "Users", icon: Users, color: "#EC4899", href: "/users" },
	{ name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
	{ name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
	{ name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
	{ name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
]

const Sidebar = () => {
    const [isSidebarOpen , setSidebarOpen] = useState(true)

    function toggleSidebar(){
        setSidebarOpen(prev=> !prev);
        console.log(isSidebarOpen)
    }

    return (
        <motion.div className={`relative z-1 transition-all duration-300 ease-in-out flex-shirk-0 ${isSidebarOpen ? "w-full md:w-64" : "md:w-20"} min-h-full flex flex-col bg-slate-800 border-r-[1px] px-1 py-4 md:p-4 border-slate-700`}>
            <motion.button
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            onClick={toggleSidebar}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit">
                <Menu size={24} />

            </motion.button>
            <div className='mt-8 flex-grow'>
                <ul className='flex flex-col gap-3'>
                    {SIDEBAR_ITEMS.map((item, i)=>(
                        <Link key={item.href} to={item.href} onClick={()=>setSidebarOpen(false)}>
                       <motion.li className='flex items-center gap-3 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors justify-center md:justify-start p-4 cursor-pointer'>
                       <item.icon size={24} style={{color:item.color, minWidth: '20px'}}/>

                       <AnimatePresence>
                        {
                            isSidebarOpen && (
                                <motion.span
                                className="whitespace-nowrap"
                                initial={{opacity:0 , width: 0}}
                                animate={{opacity:1, width: "auto"}}
                                exit={{opacity:0 , width: 0 }}
                                transition={{duration: 0.2 , delay:0.01}}>{item.name}</motion.span>
                            )
                        }
                       </AnimatePresence>
                       
                        
                   </motion.li> 
                        </Link>
                    ))}

                </ul>

            </div>

        </motion.div>
    )
}

export default Sidebar