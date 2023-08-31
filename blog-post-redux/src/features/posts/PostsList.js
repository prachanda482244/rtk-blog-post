import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import ReactionButtons from './ReactionButtons'
const PostsList = () => {
    // const posts = useSelector((state) => state.posts)
    const posts = useSelector(selectAllPosts)

    const orderedPost = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPost.map(post => (
        <article key={post.id}
            className='m-3 ring-2 rounded bg-gray-700 text-slate-300 ring-green-500  p-8 ' >
            <h3 className='text-2xl font-medium capitalize'>{post.title}</h3>
            <p>{post.description.substring(0, 100)}</p>
            <p className='flex justify-between my-3 items-center'>
                <PostAuthor userId={post.userId} />
                <TimeAgo timeStamp={post.date} />
            </p>
            <ReactionButtons post={post} />
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
