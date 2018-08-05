import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm, initialize } from 'redux-form';
import { Link } from 'react-router-dom';
import {
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Col
} from 'react-bootstrap';
import { updateUser } from '../actions';

const styles = {
  button: {
    marginLeft: 15
  }
};
const submit = (values, dispatch) => {
  dispatch(updateUser(values));
};

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
      <Col componentClass={ControlLabel} sm={2}>
        {label}
      </Col>
      <Col sm={10}>
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
      <Col componentClass={ControlLabel} sm={2}>
        {label}
      </Col>
      <Col sm={10}>
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

const renderDisabledTextField = ({
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
      <Col componentClass={ControlLabel} sm={2}>
        {label}
      </Col>
      <Col sm={10}>
        <input
          {...input}
          id={input.name}
          placeholder={placeholder}
          type={type}
          className={'form-control'}
          disabled
        />
        {touched && error && <HelpBlock>{error}</HelpBlock>}
      </Col>
    </FormGroup>
  );
};

// const UserEditModal = props => {
class UserEditModal extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { initialize, data } = this.props;
    const initData = {
      userId: data[0].id,
      name: data[0].name,
      role: data[0].role
    };
    initialize(initData);
  }

  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      reset,
      initialize,
      data,
      handleHide
    } = this.props;
    return (
      <form onSubmit={handleSubmit(submit)}>
        <FormGroup controlId="userEditForm">
          <div>
            <Field
              name="userId"
              component={renderDisabledTextField}
              type="text"
              label="User ID"
            />
          </div>
          <div>
            <Field
              name="name"
              component={renderTextField}
              type="text"
              label="User name"
            />
          </div>
          <div>
            <Field
              name="role"
              component={renderSelectField}
              type="select"
              label="Role"
            />
          </div>
          <div>
            <Button
              bsStyle="primary"
              type="submit"
              disabled={pristine || submitting}
              onClick={handleHide}
              style={styles.button}
            >
              Submit
            </Button>
            <Button
              bsStyle="danger"
              disabled={pristine || submitting}
              onClick={reset}
              style={styles.button}
            >
              Clear
            </Button>
          </div>
        </FormGroup>
      </form>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;
  const { isProcessing, data } = user || {
    isProcessing: false,
    data: []
  };

  return {
    isProcessing,
    data
  };
};

export default connect(mapStateToProps)(
  reduxForm({
    form: 'UserEditForm'
  })(UserEditModal)
);
