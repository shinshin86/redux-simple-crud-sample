import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import UserNewModal from '../components/UserNewModal';
import { createUser } from '../actions';
import { Field, reduxForm } from 'redux-form';
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Col
} from 'react-bootstrap';

const submit = (values, dispatch) => {
  dispatch(createUser(values));
};

class UserNewForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleSubmit, pristine, reset, submitting, insertId } = this.props;
    return (
      <form onSubmit={handleSubmit(submit)}>
        <div className="modal-body">
          {insertId && <p>Insert Id : {insertId}</p>}
          <Field
            name="name"
            component={renderTextField}
            type="text"
            label="User name"
          />
          <Field
            name="role"
            component={renderSelectField}
            type="select"
            label="Role"
          />
        </div>
        <div className="modal-footer" controlId="userNewForm">
          <Button
            bsStyle="primary"
            type="submit"
            disabled={pristine || submitting}
          >
            Submit
          </Button>
          <Button
            bsStyle="default"
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear
          </Button>
        </div>
      </form>
    );
  }
}

const renderTextField = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error, warning }
}) => {
  const validationState = error ? 'error' : warning ? 'warning' : 'success';
  return (
    <FormGroup
      controlId={input.name}
      validationState={touched ? validationState : null}
    >
      <Col componentClass={ControlLabel}>{label}</Col>
      <Col>
        <input
          {...input}
          id={input.name}
          placeholder={placeholder}
          type={type}
          className={'form-control'}
        />
        {touched && error && <HelpBlock>{error}</HelpBlock>}
      </Col>
    </FormGroup>
  );
};

const renderSelectField = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error, warning }
}) => {
  const validationState = error ? 'error' : warning ? 'warning' : 'success';
  return (
    <FormGroup
      controlId={input.name}
      validationState={touched ? validationState : null}
    >
      <Col componentClass={ControlLabel}>{label}</Col>
      <Col>
        <FormControl
          {...input}
          id={input.name}
          type={type}
          componentClass="select"
        >
          <option />
          <option value="1">1 - Admin</option>
          <option value="2">2 - User</option>
        </FormControl>
        {touched && error && <HelpBlock>{error}</HelpBlock>}
      </Col>
    </FormGroup>
  );
};

const mapStateToProps = state => {
  const { user } = state;
  const { isProcessing, insertId } = user || {
    isProcessing: false,
    insertId: 0
  };

  return {
    isProcessing,
    insertId
  };
};

export default connect(mapStateToProps)(
  reduxForm({
    form: 'UserNewForm'
  })(UserNewForm)
);
