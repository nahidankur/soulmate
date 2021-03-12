import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Link} from 'react-router-dom'
import { deleteEducation} from '../../actions/profile'
import {connect} from 'react-redux'

const ProfileEducation = ({deleteEducation ,education : { _id,school, from ,to, university,degree, fieldofstudy,description }}) => {
    return (
        <div className="panel-body pb5">
        <hr className="short br-lighter"/>
      <div className="row about-arrange">
      
          <Link onClick={()=> deleteEducation(_id)} className="anchor-tag">  <span className="rounded-circle bg-red about-icon"><i className="fa fa-trash"></i></span> </Link>

        
        
        
      </div>
        <h6>Education</h6>

        <h4>{fieldofstudy}, {degree}</h4>
        <p className="text-muted"> {university}
          <br/> {school}, from {moment(from).format('MM/DD/YYYY')} to {moment(to).format('MM/DD/YYYY')}  
        </p>
        <p>{description} </p>
      </div>
    )
}

ProfileEducation.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    userId: PropTypes.number.isRequired

}
const mapStateToProps = state => ({
  auth : state.auth
})

export default connect(mapStateToProps, {deleteEducation}) (ProfileEducation)
