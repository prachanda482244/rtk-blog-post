import React from 'react'
import { useSelector } from 'react-redux'

const SearchResult = () => {
    const { filteredArray } = useSelector((state) => state.search)
    const result = filteredArray.map((post) => {
        return (
            <div key={post.id} className='ring-2 p-5 bg-purple-500 text-white m-2 shadow-lg flex flex-col justify-center items-center gap-3'>
                <h1 className='bg-slate-800 py-2 px-6 rounded-md '>{post.title}</h1>
                <p>{post.description}</p>
            </div>
        )
    })
    return (
        <div>
            {result}
        </div>
    )
}

export default SearchResult
