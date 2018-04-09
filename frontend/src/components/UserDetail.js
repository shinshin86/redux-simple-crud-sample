import React from 'react'
import Header from './Header'
import { Panel, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const styles = {
  button: {
    marginLeft: 5
  }
}

const UserDetail = ({ data, handleDeleteUser }) => (
  <div>
    <Panel bsStyle='primary'>
      <Panel.Heading>
        <Panel.Title componentClass="h3">{data[0].name}</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        ID : {data[0].id}<br />
        Role : {data[0].role}
      </Panel.Body>
    </Panel>
    <Button bsStyle='primary'>
      Edit
    </Button>
    <Link to={'/users'}>
      <Button bsStyle='danger' onClick={(e) => handleDeleteUser(data[0].id, e)} style={styles.button}>
        Delete
      </Button>
    </Link>
    <Button bsStyle='default' style={styles.button}>
      <Link to={'/users'}>Top</Link>
    </Button>
 </div>
)

export default UserDetail
