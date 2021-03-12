import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {addComment } from '../../actions/post'
import { connect} from 'react-redux'

const CommentForm = ({addComment, postId}) => {
    const [text, settext] = useState('')

    const onSubmit = e => {
        e.preventDefault()
        addComment(postId,{text})
        settext('')
    }
    return (
        <div className="col-lg-12">
        <div> 
         <div className="col-md-8 col-lg-12 col-sm-12">
             <div className="comment-wrapper">
                 <div className="panel panel-info">
                     <div className="panel-heading kamrul">
                         Comment Box
                     </div>
                     <div className="panel-body">
                         <form onSubmit ={e => onSubmit(e)}>
                         <textarea
                         value={text} onChange={e => settext(e.target.value)}
                         className="form-control" required placeholder="write a comment..." rows="3"></textarea>
                         <br/>
                         <button  type="submit" className="btn btn-info pull-right">Post</button>

                         </form>
                    
           
                         
                     </div>
                 </div>
             </div>
         </div>
        
       </div>
       </div>
    )
}

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
    postId: PropTypes.number.isRequired

}

export default connect(null, {addComment}) (CommentForm)
