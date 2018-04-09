import React from 'react'
import Header from './Header'
import UserDetailContainer from '../containers/UserDetailContainer'

const UserIndex = ({ match }) => (
  <div>
    <Header />
    <UserDetailContainer userId={match.params.id} />
  </div>
)

export default UserIndex 
