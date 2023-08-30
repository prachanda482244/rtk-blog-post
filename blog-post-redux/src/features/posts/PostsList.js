import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'
import PostAuthor from './PostAuthor'
const PostsList = () => {
    // const posts = useSelector((state) => state.posts)
    const posts = useSelector(selectAllPosts)
    const renderedPosts = posts.map(post => (
        <article key={post.id}
            className='m-3 ring-2 rounded bg-gray-700 text-slate-300 ring-green-500  p-8 ' >
            <h3>{post.title}</h3>
            <p>{post.description.substring(0, 100)}</p>
            <p>
                <PostAuthor userId={post.userId} />
            </p>
        </article >
    ))
    return (
        <section className='ring-2 ring-slate-300 shadow-sm p-5' >
            <h2 className='text-2xl text-center font-medium'>Your posts</h2>
            <div className='grid grid-cols-2'>
                {renderedPosts}
            </div>
        </section>
    )
}

export default PostsList
