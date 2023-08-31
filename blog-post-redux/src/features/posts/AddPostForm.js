import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAdded } from './postsSlice'
import { selectAllUsers } from '../users/usersSlice'
const AddPostForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [userId, setUserId] = useState('')

    const users = useSelector(selectAllUsers)

    const onTitleChange = e => setTitle(e.target.value)
    const onDescriptionChange = e => setDescription(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)


    const onSavedPostClicked = () => {
        if (title && description) {
            dispatch(postAdded(title, description, userId))
            setTitle('')
            setDescription('')
        }
    }
    const canSave = Boolean(title) && Boolean(description) && Boolean(userId)

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id} className='bg-slate-600 '>
            {user.name}
        </option>
    ))
    return (
        <section className='p-3'>
            <h2 className='text-center font-medium text-xl my-3'>Add a new post</h2>
            <form className='ring-2 ring-sky-700 shadow-lg  w-2/3 mx-auto flex flex-col p-10 rounded '>
                <label htmlFor="postTitle" className='text-xl text-sky-500 my-2'>Post Title:</label>
                <input type="text"
                    id='postTitle'
                    name='postTitle'
                    className='ring-2 ring-purple-5000 rounded p-3'
                    value={title}
                    onChange={onTitleChange}
                />
                <label htmlFor="postAuthor" className='text-xl text-sky-500 my-2'>Author:</label>
                <select
                    className='ring-2 p-2 ring-sky-600 rounded bg-black text-white outline-none'
                    name="postAuthor"
                    id="postAuthor"
                    value={userId}
                    onChange={onAuthorChanged}>
                    <option value="" ></option>
                    {usersOptions}
                </select>

                <label htmlFor="postDescription" className='text-xl text-sky-500 my-2'>Descripiton : </label>
                <textarea
                    name="postDescription"
                    id="postDescription"
                    className='ring-2 ring-purple-5000 rounded p-3'
                    value={description}
                    onChange={onDescriptionChange}
                />
                <button type='button' className={`${!canSave ? 'bg-transparent ring-2 text-sky-800' : 'bg-sky-400'} text-white py-2 px-6 rounded-full outline-none my-4  `} onClick={onSavedPostClicked}
                    disabled={!canSave}
                >Save Post</button>
            </form>
        </section>
    )
}

export default AddPostForm
