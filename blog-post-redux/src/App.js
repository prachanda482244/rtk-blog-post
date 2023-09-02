import React from 'react'
import PostsList from './features/posts/PostsList'
import AddPostForm from './features/posts/AddPostForm'
import Navbar from './components/Navbar'
// import PostList from './features/posts/PostList'
// import Search from './features/search/Search'

const App = () => {
  return (
    <div>
      {/* <Search />
      <PostList /> */}
      <Navbar />
      <AddPostForm />
      <PostsList />
    </div>
  )
}

export default App
