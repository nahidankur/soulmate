

import {PROFILE_ERROR, GET_PROFILE, UPDATE_PROFILE, DELETE_EXPERIENCE, DELETE_EDUCATION, ACCOUNT_DELETED,
    GET_PROFILES, 
    CLEAR_PROFILE } from './types'

import {setAlert } from './alert'

import axios from 'axios'

// Get Current User Profile
export const getCurrentProfile = () => async dispatch => {

    try{
        const res = await axios.get('/api/profile/me')
        dispatch({
            type: GET_PROFILE,
            payload : res.data
        })

    } catch(err){
        dispatch({
            type: PROFILE_ERROR,
            payload : { msg: err.response.statusText, status: err.response.status }
        })

    }
    
}

// Create or Update Profile
export const createProfile = (formData, history, edit = false)=> async dispatch=>{
    try{
  const config= {
      headers:{
         'Content-Type' : 'application/json'
      }
  }

  const res = await axios.post('/api/profile',  formData, config)

     dispatch({
         type: GET_PROFILE,
         payload: res.data
     })

     dispatch(setAlert(edit ? 'Profile Updated': 'Profile Created', 'success'))
     
       if(!edit){
           history.push('/dashboard')
       }
    } catch(err){
        const errors = err.response.data.errors

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type: PROFILE_ERROR,
            payload : { msg: err.response.statusText, status: err.response.status }
        })

    }

}

// Add Experience
export const addExperience = (formData, history)=> async dispatch =>{
    try{
        const config= {
            headers:{
               'Content-Type' : 'application/json'
            }
        }
      
        const res = await axios.post('/api/profile/experience',  formData, config)
      
           dispatch({
               type: UPDATE_PROFILE,
               payload: res.data
           })
      
           dispatch(setAlert('Experience Added', 'success'))
            
                history.push('/dashboard')

          } catch(err){
              const errors = err.response.data.errors
      
              if(errors){
                  errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
              }
      
              dispatch({
                  type: PROFILE_ERROR,
                  payload : { msg: err.response.statusText, status: err.response.status }
              })
      
          }

}

// Add Education
export const addEducation =  (formData, history)=> async dispatch =>{
    try{
        const config= {
            headers:{
               'Content-Type' : 'application/json'
            }
        }
      
        const res = await axios.post('/api/profile/education',  formData, config)
      
           dispatch({
               type: UPDATE_PROFILE,
               payload: res.data
           })
      
           dispatch(setAlert('Education Added', 'success'))
            
                 history.push('/dashboard')
        
          } catch(err){
              const errors = err.response.data.errors
      
              if(errors){
                  errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
              }
      
              dispatch({
                  type: PROFILE_ERROR,
                  payload : { msg: err.response.statusText, status: err.response.status }
              })
      
          }

}

// Delete Experience
export const deleteExperience = (id)=> async dispatch =>{
        try{

            const res = await axios.delete(`/api/profile/experience/${id}`)

            dispatch({
                type: DELETE_EXPERIENCE,
                payload: res.data
            })

            dispatch(setAlert('Experience deleted successfully', 'success'))

        } catch(err){
            const errors = err.response.data.errors
      
              if(errors){
                  errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
              }
      
              dispatch({
                  type: PROFILE_ERROR,
                  payload : { msg: err.response.statusText, status: err.response.status }
              })
      
        }
    

}

// Delete Education
export const deleteEducation = (id)=> async dispatch =>{
        try{

           const res =  await axios.delete(`/api/profile/education/${id}`)

            dispatch({
                type: UPDATE_PROFILE,
                payload: res.data
                
            })

            dispatch(setAlert('Education deleted successfully', 'success'))

        } catch(err){
            const errors = err.response.data.errors
      
              if(errors){
                  errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
              }
      
              dispatch({
                  type: PROFILE_ERROR,
                  payload : { msg: err.response.statusText, status: err.response.status }
              })
      
        }
    

}


// Account Delete
 export const deleteAccount = () => async dispatch =>{
    if(window.confirm('Are you sure want to delete your account?')){
        try{
            await axios.delete('/api/profile')
            dispatch({
                type: CLEAR_PROFILE
            })
            dispatch({
                type: ACCOUNT_DELETED
            })
            dispatch(setAlert('Account Deleted Successfully')) 


        }catch(err){
            const errors = err.response.data.errors
      
            if(errors){
                errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
            }
    
            dispatch({
                type: PROFILE_ERROR,
                payload : { msg: err.response.statusText, status: err.response.status }
            })
        }
    }
 }

 // Get All Profiles
export const getAllProfile = () => async dispatch => {
    dispatch({type: CLEAR_PROFILE})

    try{
        const res = await axios.get('/api/profile')
        dispatch({
            type: GET_PROFILES,
            payload : res.data
        })

    } catch(err){
        dispatch({
            type: PROFILE_ERROR,
            payload : { msg: err.response.statusText, status: err.response.status }
        })

    }
    
}

// Get Profile by Id
export const getProfileById = (id) => async dispatch => {
    dispatch({type: CLEAR_PROFILE})

    try{
        const res = await axios.get(`/api/profile/user/${id}`)
        dispatch({
            type: GET_PROFILE,
            payload : res.data
        })

    } catch(err){
        dispatch({
            type: PROFILE_ERROR,
            payload : { msg: err.response.statusText, status: err.response.status }
        })

    }
    
}


