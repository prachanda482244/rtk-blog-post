import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postsSlice'

const ReactionButtons = ({ post }) => {
    const reactionEmoji = {
        thumbsUp: '👍',
        wow: '😲',
        heart: '❤️',
        rocket: '🚀',
        coffee: '☕'
    }

    const dispatch = useDispatch()
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {

        return (
            <button
                key={name}
                type='button'
                className='md:p-2 p-1 ring-2 mx-1 rounded-lg ring-sky-400'
                onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return (
        <div>
            {reactionButtons}
        </div>
    )
}

export default ReactionButtons
