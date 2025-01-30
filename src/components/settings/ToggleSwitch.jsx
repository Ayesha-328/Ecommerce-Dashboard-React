import React from 'react'

const ToggleSwitch = ({label, isOn, onToggle}) => {
  return (
    <div className="flex justify-between items-center text-gray-300 text-md">
    <span>{label}</span>

    <button onClick={onToggle} className={`relative inline-flex items-center h-6 w-11 transition-clors rounded-full 
        ${isOn ? "bg-indigo-700" : "bg-gray-500"}`}>
            <span className={`inline-block size-4 rounded-full bg-white transition-transform
                ${isOn ? 'translate-x-6': 'translate-x-1'}`}></span>

    </button>


</div>
  )
}

export default ToggleSwitch