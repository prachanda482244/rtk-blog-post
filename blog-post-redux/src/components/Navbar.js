import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-black text-white py-2 px-6 flex items-center justify-between '>
            <div className='ring-2 text-sky-600 p-2 rounded shadow-md text-xl'>
                BlogSansar
            </div>
            <div>
                By: <span className='text-green-600 capitalize'>prachanda rana</span>
            </div>
        </nav>
    )
}

export default Navbar
