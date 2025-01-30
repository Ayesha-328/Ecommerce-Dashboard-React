import { motion } from "framer-motion"
import { Edit, Search, Trash2 } from "lucide-react"
import { useState } from "react";

const PRODUCT_DATA = [
	{ id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200 },
	{ id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800 },
	{ id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650 },
	{ id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950 },
	{ id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 720 },
];

const ProductsList = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA)

    const handleSearchTerm = (e) =>{
        const term=e.target.value.toLowerCase();
        setSearchTerm(term);
        const filteredProducts = PRODUCT_DATA.filter(product=> product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term))
        setFilteredProducts(filteredProducts)
    }
    return (
        <motion.div className="bg-gray-800 backdrop-blur-md shadow-lg p-6 border border-gray-700 rounded-xl bg-opacity-50"
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}>


            <div className="flex justify-between items-center mb-6">
                <div className="text-xl font-semibold text-gray-100">Products List</div>
                <div className="relative">
                    <input type="text" placeholder="Search products..." onChange={handleSearchTerm} value={searchTerm} className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />

                </div>
            </div>
            <div className="overflow-x-auto">

                <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">NAME</th>

                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Category</th>

                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Price</th>

                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Stock</th>

                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Sales</th>

                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-700">
{filteredProducts.map((product)=>(
    <motion.tr key={product.id}
    initial={{opacity:0 }}
    animate={{opacity:1}}
    transition={{duration:0.3}}>

        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
            <img 
            className="size-10 rounded-full"
            src="https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWlycG9kc3xlbnwwfHwwfHx8MA%3D%3D" alt="Product img" />
            {product.name}
        </td>

        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{product.category}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{product.price}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{product.stock}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{product.sales}</td>

        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
            <button className="text-indigo-400 hover:text-indigo-300 mr-2">
            <Edit size={18} />
            </button>
            <button className="text-red-400 hover:text-red-300 mr-2">
        <Trash2 size={18}/>  
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

export default ProductsList