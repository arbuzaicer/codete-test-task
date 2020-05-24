import { GET_POSTS, GET_SINGLE_POST, UPDATE_SEARCH_DATA } from '../action_types';

const initialState = {
  posts: [],
  currentPost: null,
  searchData: ''
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS: {
      return { ...state, posts: payload };
    }
    case GET_SINGLE_POST: {
      return {...state, currentPost: payload}
    }
    case UPDATE_SEARCH_DATA: {
      return {...state, searchData: payload}
    }
    default: {
      return { ...state };
    }
  }
};

export default rootReducer;
