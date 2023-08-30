import React from 'react'
import PostsList from './features/posts/PostsList'
import AddPostForm from './features/posts/AddPostForm'
import PostAuthor from './features/posts/PostAuthor'
// import PostList from './features/posts/PostList'
// import Search from './features/search/Search'

const App = () => {
  return (
    <div>
      {/* <Search />
      <PostList /> */}

      <div>
        <PostAuthor />
        <AddPostForm />
        <PostsList />
      </div>
    </div>
  )
}

export default App
