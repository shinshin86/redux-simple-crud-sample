import React from 'react'

const UserData = ({ data }) => (
  <tr>
    <td>{data.id}</td>
    <td>{data.name}</td>
    <td>{data.role}</td>
  </tr>
)

export default UserData
