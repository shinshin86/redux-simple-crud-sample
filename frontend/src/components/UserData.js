import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const styles = {
  button: {
    marginLeft: 5
  }
}

const UserData = ({ data }) => (
  <tr>
    <td>{data.id}</td>
    <td>{data.name}</td>
    <td>{data.role}</td>
    <td>
      <Link to={`/user/${data.id}`}>
        <Button bsStyle='primary'>
          Detail
        </Button>
      </Link>
      <Link to={`/user/${data.id}`}>
        <Button bsStyle='danger' style={styles.button}>
          Delete
        </Button>
      </Link>
    </td>
  </tr>
)

export default UserData
