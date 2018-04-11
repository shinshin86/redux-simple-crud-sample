import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { requestUser, deleteUser } from '../actions'
import UserDetail from '../components/UserDetail'

class UserDetailContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { userId } = this.props;
    this.props.requestUser(userId);
  }

  render() {
    const { data, deleteUser } = this.props
    return (
      <div>
        <UserDetail data={data} handleDeleteUser={deleteUser} />
      </div>
    )
  }
}

UserDetailContainer.propTypes = {
  data: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

function mapStateToProps(state) {
  const { user } = state
  const { isFetching, data } = user || {
    isFetching: false,
    data: []
  }

  return {
    isFetching,
    data
  }
}

export default connect(mapStateToProps, { requestUser, deleteUser })(UserDetailContainer)
