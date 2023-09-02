import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, selectAllPosts } from './postsSlice'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'
const PostsList = () => {
    // const posts = useSelector((state) => state.posts)
    const dispatch = useDispatch()
    const HandleDeletePost = (id) => {
        dispatch(deletePost(id))
    }
    const posts = useSelector(selectAllPosts)
    const orderedPost = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    const renderedPosts = orderedPost.length !== 0 ? orderedPost.map(post => (
        <article key={post.id}
            className='m-3 ring-2 rounded bg-gray-700 relative text-slate-300 ring-green-500  p-8 ' >
            <h3 className='text-2xl font-medium capitalize'>{post.title}</h3>
            <p>{post.description.substring(0, 100)}</p>
            <p className='flex justify-between my-3 items-center'>
                <PostAuthor userId={post.userId} />
                <TimeAgo timeStamp={post.date} />
            </p>
            <ReactionButtons post={post} />
            <button className='text-white text-2xl absolute right-3 top-1 ' onClick={() => HandleDeletePost(post.id)}>x</button>
        </article >
    )) : <div className='m-3 ring-2 rounded bg-gray-700 text-slate-300 ring-green-500  text-center p-3 uppercase  '>Wrtie some cool blogs . . .</div>
    return (
        <section className='ring-2 ring-slate-300 shadow-sm p-5' >
            <h2 className='text-2xl text-center font-medium uppercase'>Your blogs</h2>
            <div className='grid md:grid-cols-2 sm:grid-cols-1'>
                {renderedPosts}
            </div>
        </section>
    )
}

export default PostsList
