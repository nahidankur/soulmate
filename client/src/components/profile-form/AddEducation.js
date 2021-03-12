import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import {connect } from 'react-redux'
import { Link, withRouter} from 'react-router-dom'
import {addEducation} from '../../actions/profile'

const AddEducation = ({history, addEducation}) => {
    const [formData, setFormData ] =  useState({
        school: '',
        from: '',
        to: '',
        university: '',
        degree: '',
        fieldofstudy: '',
        description: ''

    })

    const { school, from, to, university, degree, fieldofstudy, description } = formData

    const onChange = e=>{
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = e=> {
        e.preventDefault()
        addEducation(formData, history)
    }
    return (
        <Fragment>
    
            <div className="card up-pb">
            
                    <div className="panel-heading">
                        <h3 className="panel-title">Edit Education</h3>
                        <span className="smf"><small>* marked fields are required</small></span>
                    </div>
                    <div>
                        <form role="form" onSubmit={e => onSubmit(e)}>
                            <div className="form-group">
                                <label>School *</label>
                                <input type="text" value={school} name='school' onChange={e=> onChange(e)}  className="form-control"/ >
                            </div>
                            <div className="form-group">
                              <label>From Date</label>
                              <input type="date"  className="form-control"
                                    value={from} name='from' onChange={e=> onChange(e)}/>
                          </div>
                          <div className="form-group">
                            <label >To Date</label>
                            <input type="date" className="form-control"
                                value={to} name='to' onChange={e=> onChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label>University</label>
                            <input type="text" className="form-control" 
                            value={university} name='university' onChange={e=> onChange(e)}
                            / >
                        </div>
                        <div className="form-group">
                            <label for="FullName">Degree</label>
                            <input type="text" className="form-control"
                            value={degree} name= 'degree' onChange={e=> onChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label for="FullName">Field of Study</label>
                            <input type="text" className="form-control"
                            value={fieldofstudy} name='fieldofstudy' onChange={e=> onChange(e)}
                            />
                        </div>
                          
                            <div className="form-group">
                                <label for="AboutMe">Description</label>
                                <textarea  className="form-control" 
                                value={description} name= 'description' onChange={e=> onChange(e)}
                                ></textarea>
                            </div>
                            <button className="btn btn-primary waves-effect waves-light w-md" type="submit">Save</button>
                            <Link to='/dashboard' className="btn ml-3 btn-secondary waves-effect waves-light w-md">Back</Link>
                        </form>
        
                    </div>
                
            </div>
         
        </Fragment>
    )
}

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired

}

export default connect(null, {addEducation}) (withRouter(AddEducation))
