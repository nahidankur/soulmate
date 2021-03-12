import React, {useEffect, Fragment} from 'react'
import PropTypes from 'prop-types'
import { connect} from 'react-redux'
import { getCurrentProfile, deleteAccount} from '../../actions/profile'
import Spinner from '../layouts/Spinner'
import {Link } from 'react-router-dom'
import DashboardaAction from './DashboardaAction'
import Education from './Education'
import Experience from './Experience'

const Dashboard = ({getCurrentProfile, deleteAccount, auth : {user} , profile: { profile, loading }} ) => {

    useEffect(()=>{
        getCurrentProfile()
    }, [getCurrentProfile])
    return  loading && profile ===null ? <Spinner /> : <Fragment>
        <h1 className='font-weight-bold text-info'> Welcome { user && user.name } </h1>
        { profile !== null ? (<Fragment> 
            < DashboardaAction />
            < Education education={profile.education} />
            < Experience experience={ profile.experience } />

            <div className='my-2'>
                <button className='btn btn-danger' onClick={deleteAccount} >
                  <i className='fa fa-user-minus'></i>  Delete My Account

                </button>

            </div>

        </Fragment>) : (<Fragment>
            <h5>You have not created a profile yet. Create a now</h5>
                  
                  <Link to='/create-profile' className='btn btn-info'>Create Profile</Link>
             </Fragment>) }
    
  
                  
    </Fragment>
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired

}
const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile

})

export default connect(mapStateToProps, {getCurrentProfile, deleteAccount}) (Dashboard)

