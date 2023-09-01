import React from 'react'
import Avatar from './Avatar'

const LeftPanel = () => {

    const array = [
        {username:"Shaheer", online:true, color:"bg-emerald-500",img:""},
        {username:"Babar", online:true, color:"bg-cyan-500",img:"https://w0.peakpx.com/wallpaper/878/142/HD-wallpaper-babar-azam-cricket-pakistan-sports.jpg"},
        {username:"Rizwan", online:false, color:"bg-teal-500",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQtG0NrlJzVmpnUH0kg5H2PEP0YNXRWIXiTg&usqp=CAU"}
    ]

    return (
        <div className="bg-[#272727] grid grid-rows-[1fr,14fr] divide-y divide-[#1c1c1c]">
           
           {/* Input */}
           
            <div className="flex h-14 justify-center items-center  ">
                <input type="text" placeholder="Search User" className="my-5 text-zinc-50 h-[70%] w-[90%] p-2 outline-none rounded bg-[#2f2f2f]" />
            </div>

{/* Contact Container */}

            <div>
{
    array.map((item,i)=>(
        <div key={i} className={' my-1 border-b border-[#1c1c1c] flex items-center gap-2 cursor-pointer h-14 py-1.5 '}>
        <div className='flex gap-2 items-center py-2 pl-4'>
            <Avatar item={item} />
            <span className='text-white text-lg'> {item.username}</span>
        </div>
    </div>
    ))
}
            </div>
        </div>)
}

export default LeftPanel