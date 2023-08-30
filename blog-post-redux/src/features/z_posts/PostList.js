import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPost } from './postSlice'
import { deletePost } from './postSlice'
const PostList = () => {
    const dispatch = useDispatch()
    const posts = useSelector(getAllPost)
    const { filteredArray } = useSelector(state => state.search)
    const HandleDeletePost = (id) => {
        dispatch(deletePost(id))
    }

    const renderedPost = filteredArray.length === 0 && posts.map(post => (
        <div key={post.id} className='ring-2 p-5 bg-purple-500 text-white m-2 shadow-lg relative flex flex-col justify-center items-center gap-3'>
            <button className='text-red-900 text-xl absolute right-3 top-1 ' onClick={() => HandleDeletePost(post.id)}>x</button>
            <h1 className='bg-slate-800 py-2 px-6 rounded-md '>{post?.title}</h1>
            <p>{post.description}</p>
        </div>
    ))
    return (
        <div>
            {renderedPost}
        </div>
    )
}

export default PostList
