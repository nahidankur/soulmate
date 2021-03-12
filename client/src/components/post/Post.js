import React, {useEffect, Fragment} from 'react'
import PropTypes from 'prop-types'
import {getPost } from '../../actions/post'
import { connect} from 'react-redux'
import {Link } from 'react-router-dom'
import moment from 'moment'
import Spinner from '../layouts/Spinner'
import PostItem from './PostItem'
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'

const Post = ({getPost, post: { post , loading}, match}) => {
    useEffect(()=>{
        getPost(match.params.id)
    }, getPost, match.params.id)
    return (
        loading || post === null ? (<Spinner/>) : (<Fragment>
            <PostItem post={post} />
            <CommentForm postId={post._id} />
            {
                post.comments.map(comment => (
                    <CommentItem key={comment._id} comment={ comment } postId = {post._id} />
                ))
            }

        </Fragment>)
        
    )
}

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, {getPost}) (Post)
