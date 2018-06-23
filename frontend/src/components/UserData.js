import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const styles = {
  button: {
    marginLeft: 5
  }
};

const UserData = ({ data, handleDeleteUser }) => (
  <tr>
    <td>{data.id}</td>
    <td>{data.name}</td>
    <td>{data.role}</td>
    <td>
      <Link to={`/user/${data.id}`}>
        <Button bsStyle="primary">Detail</Button>
      </Link>
      <Link to={`/users`}>
        <Button
          bsStyle="danger"
          style={styles.button}
          onClick={e => handleDeleteUser(data.id, e)}
        >
          Delete
        </Button>
      </Link>
    </td>
  </tr>
);

UserData.PropTypes = {
  handleDeleteUser: PropTypes.func.isRequired
};

export default UserData;
