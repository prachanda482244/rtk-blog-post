import React, { useState } from 'react'
import { getAllPost } from '../z_posts/postSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch, setFilteredPost } from './searchSlice'
import SearchResult from './SearchResult'
import PostAdd from '../z_posts/PostAdd'

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const post = useSelector(getAllPost)
    const dispatch = useDispatch()
    const HandleSearch = () => {
        const filteredPost = post.filter(posts => posts.title.toLowerCase().includes(searchQuery.toLowerCase()) || posts.description.toLowerCase().includes(searchQuery.toLowerCase()))
        dispatch(setSearch(searchQuery))
        dispatch(setFilteredPost(filteredPost))
        if (filteredPost.length === 0) alert('Not found')
    }
    return (
        <>
            < div className='flex justify-around items-center gap-3 p-3' >
                <input type="search" className='py-2 px-6 ring-2 outline-none focus:ring-purple-900  ring-purple-400 rounded-lg w-full ' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button className='py-2 px-4 bg-sky-500 rounded ' onClick={HandleSearch}>Search</button>

            </ div>
            <PostAdd />

            <div>
                <SearchResult />
            </div>
        </>

    )
}

export default Search


