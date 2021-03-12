import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { deleteExperience } from '../../actions/profile'
import {Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'

const Experience = ({experience = [], deleteExperience}) => {
    const experiences = experience.map((exp) => (
       
        <tr key={exp._id}>
          <td>{exp.title}</td>
          <td >{exp.company}</td>
          <td >{exp.location}</td>
          <td>
          {moment(exp.from).format('MM/DD/YYYY')} 
      
          </td>
          <td>
          {moment(exp.to).format('MM/DD/YYYY')}
          </td>
          <td>
            <button
              className="btn btn-danger" onClick={()=> deleteExperience(exp._id)}>
              Delete
            </button>
          </td>
        </tr>
      ));
    
      return (
        <Fragment>
          <h2 className="my-4">Experience Credentials</h2>
          <div className='resp-t'>
          <table className="table">
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Company</th>
                <th >Location</th>
                <th >From</th>
              </tr>
            </thead>
            <tbody>{experiences}</tbody>
          </table>

          </div>
      
        </Fragment>
      );
    };


Experience.propTypes = {
 experience: PropTypes.array.isRequired,
 deleteExperience: PropTypes.func.isRequired

}

export default connect(null, {deleteExperience }) (Experience)

