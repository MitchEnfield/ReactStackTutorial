import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ConfirmEmailMessage from '../Messages/ConfirmEmailMessage';

const DashboardPage = ({ isConfirmed }) => {
  return (
    <div>
      {!isConfirmed && <ConfirmEmailMessage />}
    </div>
  )
}

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
  return {
    isConfirmed: state.user.confirmed
  }
}

export default connect(mapStateToProps)(DashboardPage);
