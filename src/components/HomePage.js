import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <React.Fragment>
    <h1>Home</h1>
    <Link to="/users">Users</Link>
  </React.Fragment>
)

export default Home
