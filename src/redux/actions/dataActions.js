import { SET_POSTS, LOADING_DATA, DELETE_POST, POST_PRODUCT, SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types";
import axios from 'axios';
//GET ALL PRODUCTS
export const getPosts = () => dispatch => {
    dispatch({ type: LOADING_DATA });
    axios.get('/posts')
        .then(res => {
            dispatch({
                type: SET_POSTS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: SET_POSTS,
                payload: []
            })
        })
}
//POST PRODUCT
export const postProduct = (newProduct) => {
    dispatch({ type: LOADING_UI });
    axios.post('/product', newProduct)
        .then(res => {
            dispatch({
                type: POST_SCREAM,
                payload: res.data
            })
            dispatch({ type: CLEAR_ERRORS })
        })
        .catch(err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}
//DELETE PRODUCT
export const deletePost = (postId) => (dispatch) => {
    axios.delete(`/post/${postId}`)
        .then(() => {
            dispatch({ type: DELETE_POST, payload: postId })
        })
        .catch(err => console.log(err))
}