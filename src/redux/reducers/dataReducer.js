import { SET_POSTS } from '../types';
import { LOADING_DATA, DELETE_POST, POST_PRODUCT } from '../types';

const initialState = {
    posts: [],
    post: {},
    loading: false
};

export default function(state = initialState, action){
    switch(action.type){
        case LOADING_DATA:
            return {
                ...state,
                loading: true
            }
        case SET_POSTS:
            return{
                ...state,
                posts: action.payload,
                loading: false
            }
        case DELETE_POST:
            let index = state.posts.findIndex(post => post.postId === action.payload);
            state.posts.splice(index, 1);
            return {
                ...state
            }
        case POST_PRODUCT:
            return [
                ...state,
                screams: [
                    action.payload,
                    ...state.posts
                ]
            ]
        default:
            return state
    }
}