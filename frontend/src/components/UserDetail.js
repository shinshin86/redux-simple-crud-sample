import React from 'react'
import Header from './Header'
import { Panel } from 'react-bootstrap'

const UserDetail = ({ data }) => (
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
 </div>
)

export default UserDetail
