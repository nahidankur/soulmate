import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE, UPDATE_PROFILE, DELETE_EDUCATION, DELETE_EXPERIENCE, GET_PROFILES } from '../actions/types'

const initialState = {
    profile : null,
    profiles : [],
    loading: true,
    error: {}
}

export default function(state = initialState, action){
    const { type, payload }  = action

    switch (type){
        case UPDATE_PROFILE:
        case GET_PROFILE:
        case DELETE_EXPERIENCE:
        case DELETE_EDUCATION:
        return{
                ...state,
                loading: false,
                profile: payload
            }
        case PROFILE_ERROR:
            return{
                ...state,
                error: payload,
                loading: false
            }
        case CLEAR_PROFILE:
            return{
                ...state,
             
                profile: null
            }
        case GET_PROFILES:
            return{
                ...state,
                loading: false,
                profiles: payload
            }
            default:
                return state
    }
}


