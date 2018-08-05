import React from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';
import UserNewForm from '../containers/UserNewForm';
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Col
} from 'react-bootstrap';

const UserNewModal = () => (
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          New User
        </h5>
        <Link to="/users">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Link>
      </div>
      <UserNewForm />
    </div>
  </div>
);

export default UserNewModal;
