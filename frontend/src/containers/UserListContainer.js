import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { requestAllUser, deleteUser } from '../actions';
import UserList from '../components/UserList';

class UserListContainer extends Component {
  constructor(props) {
    super(props);
    this.props.requestAllUser();
  }

  render() {
    const { data, deleteUser } = this.props;
    return (
      <div>
        <UserList data={data} deleteUser={deleteUser} />
      </div>
    );
  }
}

UserListContainer.propTypes = {
  data: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  const { user } = state;
  const { isFetching, data } = user || {
    isFetching: false,
    data: []
  };

  return {
    isFetching,
    data
  };
}

export default connect(
  mapStateToProps,
  { requestAllUser, deleteUser }
)(UserListContainer);
