import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Link} from 'react-router-dom'
import {connect} from 'react-redux'

const ProfileEducation = ({education : {school, from ,to, university,degree, fieldofstudy,description }}) => {
    return (
        <div className="panel-body pb5">
        <hr className="short br-lighter"/>
      <div className="row about-arrange">
         
      </div>
        <h6>Education</h6>

        <h4>{fieldofstudy }, {degree}</h4>
        <p className="text-muted"> {university }
          <br/> {school}  from {moment(from ).format('MM/DD/YYYY')} to {moment(to).format('MM/DD/YYYY')}  
        </p>
        <p>{description} </p>
      </div>
    )
}

ProfileEducation.propTypes = {
    education: PropTypes.array.isRequired,
    auth: PropTypes.object.isRequired,
   

}
const mapStateToProps = state => ({
  auth : state.auth
})

export default connect(mapStateToProps) (ProfileEducation)
