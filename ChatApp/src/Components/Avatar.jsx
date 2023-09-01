import React from 'react'

const Avatar = ({ item }) => {
    return (
        <div className={`w-10 h-10 relative rounded-full flex items-center ${item.color}`}>
            <div className='text-center text-xl w-full opacity-70'>{item.username[0]}</div>
            {
                item.online && (
                    <div className='absolute w-3 h-3 bg-green-600 rounded-full bottom-0 right-0 border border-white shadow-lg'></div>
                )
            }
            {
                !item.online && (
                    <div className='absolute w-3 h-3 bg-gray-200 rounded-full bottom-0 right-0 border border-gray-600 shadow-lg'></div>
                )
            }
        </div>
    )
}

export default Avatar