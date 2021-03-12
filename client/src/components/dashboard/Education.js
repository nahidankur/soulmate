import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { deleteEducation } from '../../actions/profile'
import {Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import './table.css'

const Education = ({education = [], deleteEducation}) => {
    const educations = education.map((edu) => (
       
        <tr key={edu._id}>
          <td>{edu.school}</td>
          <td >{edu.university}</td>
          <td>
          {moment(edu.from).format('MM/DD/YYYY')} 
      
          </td>
          <td>
          {moment(edu.to).format('MM/DD/YYYY')}
          </td>
          <td>
            <button
              className="btn btn-danger" onClick={()=> deleteEducation(edu._id)}>
              Delete
            </button>
          </td>
        </tr>
      ));
    
      return (
        <Fragment>
          <h2 className="my-4">Education Credentials</h2>
          <div className='resp-t'>
          <table className="table">
            <thead>
              <tr>
                <th>School</th>
                <th>University</th>
                <th >From</th>
                <th >To</th>
              </tr>
            </thead>
            <tbody>{educations}</tbody>
          </table>

          </div>
       
        </Fragment>
      );
    };


Education.propTypes = {
 education: PropTypes.array.isRequired,
 deleteEducation: PropTypes.func.isRequired

}

export default connect(null, {deleteEducation }) (Education)

