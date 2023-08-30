import React, { useState } from 'react'
import { addPost } from './postSlice'
import { useDispatch } from 'react-redux'

const PostAdd = () => {
    const [inputTitle, setInputTitle] = useState('')
    const [inputDescription, setInputDescription] = useState('')
    const dispatch = useDispatch()
    const HandleAddPost = () => {
        const obj = {
            id: Date.now(),
            title: inputTitle,
            description: inputDescription
        }
        dispatch(addPost(obj))
    }
    return (
        <div>
            <input className='ring-2 block' type="text" onChange={(e) => setInputTitle(e.target.value)} value={inputTitle} />
            <input className='ring-2 block' type="text" onChange={(e) => setInputDescription(e.target.value)} value={inputDescription} />
            <button onClick={HandleAddPost}>Add Post</button>
        </div>
    )
}

export default PostAdd
