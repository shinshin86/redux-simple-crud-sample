import React from 'react';
import Header from './Header';
import UserData from './UserData';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

const UserList = ({ data, deleteUser }) => (
  <div>
    <Link to={'/user/new'}>
      <Button bsStyle="primary">New</Button>
    </Link>
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Role</th>
          <th>Controller</th>
        </tr>
      </thead>
      <tbody>
        {data.map(d => {
          return <UserData key={d.id} data={d} handleDeleteUser={deleteUser} />;
        })}
      </tbody>
    </Table>
  </div>
);

export default UserList;
