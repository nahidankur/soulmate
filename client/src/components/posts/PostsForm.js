import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addPost } from '../../actions/post'
import { Link} from 'react-router-dom'
import './postpic.css'

const PostsForm = ({auth: {user, loading}, addPost}) => {
    const [text, setText] = useState('')

    const onSubmit = e=>{
        e.preventDefault()
        addPost({text})
        setText('')
    }
    return (
        <div >
        <div className="container ">
            <div className="d-flex flex-row ">
               <Link to='/myprofile'> <img className="mind-pic" src= { !loading && user.picture ? user.picture : "/noimg.png" }/></Link>
                <p className="mb-4 ph-title">What's on your mind, { !loading && user.name && user.name.trim().split(' ')[0]} ?</p>

            </div>
            <form onSubmit={e => onSubmit(e)}>
            <div className="form-group" >
               <textarea
               value={text} onChange={e => setText(e.target.value)} 
               placeholder="write something....." required className="form-control mt-2" id="exampleFormControlTextarea1" rows="5"></textarea>
              </div>
              <button type='submit' className="btn btn-info px-3">Post</button>


            </form>
            

        
      </div>

  </div>
    )
}

PostsForm.propTypes = {
    auth: PropTypes.object.isRequired,
    addPost: PropTypes.func.isRequired
    

}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {addPost}) (PostsForm)
