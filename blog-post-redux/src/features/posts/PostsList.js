import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'
import PostAuthor from './PostAuthor'
const PostsList = () => {
    // const posts = useSelector((state) => state.posts)
    const posts = useSelector(selectAllPosts)
    const renderedPosts = posts.map(post => (
        <article key={post.id}
            className='m-8 border-2 border-red-800 p-8 ' >
            <h3>{post.title}</h3>
            <p>{post.description.substring(0, 100)}</p>
            <p>
                <PostAuthor userId={post.userId} />
            </p>
        </article >
    ))
    return (
        <section>
            <h2 className='text-2xl text-center font-medium'>Your posts</h2>
            {renderedPosts}
        </section>
    )
}

export default PostsList
