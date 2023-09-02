import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postAdded } from './postsSlice'
import { addUsers } from '../users/usersSlice'
import { nanoid } from '@reduxjs/toolkit'
const AddPostForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [user, setUser] = useState('')
    const onTitleChange = e => setTitle(e.target.value)
    const onDescriptionChange = e => setDescription(e.target.value)
    const onAuthorChanged = e => setUser(e.target.value)

    const newUser = {
        id: nanoid(),
        name: user,
    }
    const onSavedPostClicked = () => {
        if (title && description) {
            dispatch(postAdded(title, description, newUser.id))
            dispatch(addUsers(newUser))
            setTitle('')
            setDescription('')
            setUser('')
        }
    }
    const canSave = Boolean(title) && Boolean(description) && Boolean(user)


    return (
        <section className='p-3'>
            <h2 className='text-center font-medium text-2xl uppercase my-3'>Write a new blog ? Go ahead </h2>
            <form className='ring-2 ring-sky-700 shadow-lg  w-2/3 mx-auto flex flex-col p-10 rounded '>
                <label htmlFor="postTitle" className='text-xl text-sky-500 my-2'>Post Title:</label>
                <input type="text"
                    id='postTitle'
                    name='postTitle'
                    placeholder='Post Title'
                    className='ring-2 ring-purple-5000 rounded p-3'
                    value={title}
                    onChange={onTitleChange}
                />
                <label htmlFor="postAuthor" className='text-xl text-sky-500 my-2'>Author:</label>
                <input type="text"
                    placeholder='Author Name'
                    className='ring-2 ring-purple-5000 rounded p-3'

                    value={user}
                    onChange={onAuthorChanged} />

                <label htmlFor="postDescription" className='text-xl text-sky-500 my-2'>Descripiton : </label>
                <textarea
                    name="postDescription"
                    id="postDescription"
                    placeholder='Post Description'
                    className='ring-2 ring-purple-5000 rounded p-3'
                    value={description}
                    onChange={onDescriptionChange}
                />
                <button type='button' className={`${!canSave ? 'bg-transparent ring-2 text-sky-600' : 'bg-sky-400'} text-white py-2 px-6 rounded-full outline-none my-4  `} onClick={onSavedPostClicked}
                    disabled={!canSave}
                >Add blog</button>
            </form>
        </section >
    )
}

export default AddPostForm
