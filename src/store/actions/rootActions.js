import api from '../../api/api';
import { GET_POSTS, GET_POSTS_FAIL, GET_SINGLE_POST, GET_SINGLE_POST_FAIL, UPDATE_SEARCH_DATA } from '../action_types';

export const getPostsAction = () => (dispatch) => {
  api.getPosts().then(data => {
    dispatch({
        type: GET_POSTS,
        payload: data.data
    })
  }).catch(err => {
      console.log(err);
      dispatch({
          type: GET_POSTS_FAIL,
          payload: err
      })
  })
};

export const getPostByIdAction = (id) => (dispatch) => {
    api.getPostById(id).then(data => {
        dispatch({
            type: GET_SINGLE_POST,
            payload: data.data
        })
    }).catch(err => {
        console.log(err);
        dispatch({
            type: GET_SINGLE_POST_FAIL,
            payload: err
        })
    })
};

export const updateSearchDataAction = (data) => dispatch => dispatch({type: UPDATE_SEARCH_DATA, payload: data});
