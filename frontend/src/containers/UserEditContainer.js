import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal } from 'react-bootstrap'
import UserEditModal from './UserEditModal'

class UserEditContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleHide() {
    this.setState({ show: false });
  }
  render() {
    const { data } = this.props
    return (
      <span className="modal-container">
        <Button
          bsStyle="primary"
          onClick={() => this.setState({ show: true })}
        >
          Edit
        </Button>
        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              Edit : {data.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UserEditModal data={data} handleHide={this.handleHide} />
          </Modal.Body>
        </Modal>
      </span>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state
  const { data } = user || {
    data: []
  }

  return {
    data
  }
}

export default connect(mapStateToProps)(UserEditContainer)
