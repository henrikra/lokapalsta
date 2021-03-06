import React from 'react'
import { Router, Route } from 'react-router'
import createHistory from 'history/createHashHistory'
import { APP_NAME } from '../constants'
import Reply from './Reply'
import Post from './Post'
import PostsList from './PostsList'
import NavBar from './NavBar'

const history = createHistory()

const App = (props) => {
  return (
  <div className="container mt-5">
    <h2 style={styles.heading}>{APP_NAME}</h2>
    <Router history={history}>
      <div>
        <Route path="/" component={NavBar} />
        <Route exact path="/posts" component={PostsList} />
        <Route exact path="/posts" component={Reply} />
        <Route path="/posts/:id" component={Post} />
      </div> 
    </Router>
  </div>
  )
}

const styles = {
  heading: {
    color: 'hotpink'
  }
}

export default App
