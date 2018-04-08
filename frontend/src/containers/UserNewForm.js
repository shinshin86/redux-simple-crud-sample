import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { Button, FormGroup, FormControl, ControlLabel, Col  } from 'react-bootstrap'
import { createUser } from '../actions'

const submit = (values, dispatch) => {
  dispatch(createUser(values))
}

const renderTextField =
  ({
     input,
     label,
     type,
     placeholder,
     meta: {touched, error, warning}
   }) => {
    const validationState = error ? 'error' : warning ? 'warning' : 'success';
    return (
      <FormGroup controlId={input.name} validationState={touched ? validationState : null}>
        <Col componentClass={ControlLabel} sm={2}>{label}</Col>
        <Col sm={5}>
          <input {...input} id={input.name} placeholder={placeholder} type={type} className={'form-control'}/>
          {
            touched && error &&
            <HelpBlock>{error}</HelpBlock>
          }
        </Col>
      </FormGroup>
    )
  };

const renderSelectField =
  ({
     input,
     label,
     type,
     placeholder,
     meta: {touched, error, warning}
   }) => {
    const validationState = error ? 'error' : warning ? 'warning' : 'success';
    return (
      <FormGroup controlId={input.name} validationState={touched ? validationState : null}>
        <Col componentClass={ControlLabel} sm={2}>{label}</Col>
        <Col sm={5}>
          <FormControl {...input} id={input.name} type={type} componentClass="select">
            <option />
	    <option value="1">1 - Admin</option>
	    <option value="2">2 - User</option>
	  </FormControl>
          {
            touched && error &&
            <HelpBlock>{error}</HelpBlock>
          }
        </Col>
      </FormGroup>
    )
  };

const UserNewForm = props => {
  const { handleSubmit, pristine, reset, submitting, insertId } = props;
  return (
    <form onSubmit={handleSubmit(submit)}>
      <FormGroup controlId='userNewForm'>
        <div>
          {insertId && <p>Insert Id : {insertId}</p>}
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
          <Button bsStyle='primary' type="submit" disabled={pristine || submitting}>Submit</Button>
          <Button bsStyle='default' type="button" disabled={pristine || submitting} onClick={reset}>
            Clear
          </Button>
          <Link to={'/users'}>
            <Button bsStyle='link'> 
              Top
            </Button>
          </Link>
        </div>
      </FormGroup>
    </form>
  );
};

const mapStateToProps = state => {
  const { user } = state
  const { isProcessing, insertId } = user || {
    isProcessing: false,
    insertId: 0,
  }

  return {
    isProcessing, 
    insertId
  }
}

export default connect(mapStateToProps)(
  reduxForm({
    form: "UserNewForm"
  })(UserNewForm)
)
