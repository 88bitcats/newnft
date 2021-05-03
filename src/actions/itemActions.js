import axios from 'axios';
import baseUrl from '../actions/baseUrl';
import { GET_ITEMS_CATEGORY, GET_ITEMS, GET_ITEM, GET_ERRORS } from './types';

//get item details based on ID
export const getItem = (id = 1000) => (dispatch) => {
  axios
    .get(`${baseUrl}/item/${id}`)
    .then((res) => {
      dispatch({
        type: GET_ITEM,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

//get items based on category and pagination
export const getItems = (category, pageNo, pageSize = 8) => (dispatch) => {
  let url = '';
  if (category === 'All') {
    url = `${baseUrl}/items/${pageNo}/${pageSize}`;
  } else {
    url = `${baseUrl}/items/${category}`;
  }
  axios
    .get(url)
    .then((res) => {
      dispatch({
        type: GET_ITEMS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};

//GET all item categories
export const getCategories = () => (dispatch) => {
  axios
    .get(`${baseUrl}/categories`)
    .then((res) => {
      dispatch({
        type: GET_ITEMS_CATEGORY,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};