import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect} from 'react-redux'

const PrivateRoutes = ({ auth: { isAuthenticated, loading }, component : Component, ...rest }) => (
    <Route {...rest } render={props => !isAuthenticated && !loading ? ( <Redirect to='/login' />): 
    (<Component { ...props } />)
} />
)
PrivateRoutes.propTypes = {
   auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps) (PrivateRoutes)

