import axios from 'axios'
import {GET_POSTS, POST_ERROR, UPDATE_LIKES, DELETE_POST, ADD_POST, GET_POST, DELETE_COMMENT, ADD_COMMENT} from './types'
import {setAlert } from './alert'

// GET POSTS
export const getPosts = ()=> async dispatch =>{
    try {
        const res = await axios.get('/api/posts')
        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
        
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload : { msg: err.response.statusText, status: err.response.status }
        })

    }

}

// Add Likes
export const addLike = (id)=> async dispatch =>{
    try {
        const res = await axios.post(`/api/posts/like/${id}`)
        dispatch({
            type: UPDATE_LIKES,
            payload: { id, likes: res.data }
        })
        
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload : { msg: err.response.statusText, status: err.response.status }
        })

    }

}

// Remove Likes
export const removeLike = (id)=> async dispatch =>{
    try {
        const res = await axios.post(`/api/posts/unlike/${id}`)
        dispatch({
            type: UPDATE_LIKES,
            payload: { id, likes: res.data }
        })
        
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload : { msg: err.response.statusText, status: err.response.status }
        })

    }

}

// Remove Post
export const removePost = (id)=> async dispatch =>{
    try {
         await axios.delete(`/api/posts/${id}`)
        dispatch({
            type: DELETE_POST,
            payload: id 
        })

        dispatch(setAlert('Post has been deleted successfully', 'success'))
        
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload : { msg: err.response.statusText, status: err.response.status }
        })

    }

}

// Add Post
export const addPost = (formData)=> async dispatch =>{
    try {
        const config = {
            headers : {
                'Content-Type'  : 'application/json'
            }
        }
        const res = await axios.post(`/api/posts`, formData, config)
        dispatch({
            type: ADD_POST,
            payload: res.data 
        })

        dispatch(setAlert('Post has been created', 'success'))
        
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload : { msg: err.response.statusText, status: err.response.status }
        })

    }

}

// GET POST
export const getPost = (id)=> async dispatch =>{
    try {
        const res = await axios.get(`/api/posts/${id}`)
        dispatch({
            type: GET_POST,
            payload: res.data
        })
        
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload : { msg: err.response.statusText, status: err.response.status }
        })

    }

}

// Add Comment
export const addComment = (postId, formData)=> async dispatch =>{
    try {
        const config = {
            headers : {
                'Content-Type'  : 'application/json'
            }
        }
        const res = await axios.post(`/api/posts/comment/${postId}`, formData, config)
        dispatch({
            type: ADD_COMMENT,
            payload: res.data 
        })

        dispatch(setAlert('Comment Added', 'success'))
        
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload : { msg: err.response.statusText, status: err.response.status }
        })

    }

}

// Delete Comment
export const deleteComment = (postId, commentId)=> async dispatch =>{
    try {
 
         await axios.delete(`/api/posts/comment/${postId}/${commentId}`)
        dispatch({
            type: DELETE_COMMENT,
            payload: commentId
        })

        dispatch(setAlert('Comment deleted', 'success'))
        
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload : { msg: err.response.statusText, status: err.response.status }
        })

    }

}