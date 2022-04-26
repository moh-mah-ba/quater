import {
  PROPERTY_ADD_SUCCESS,
  PROPERTY_ADD_FAIL,
  PROPERTY_LIST_SUCCESS,
  PROPERTY_LIST_FAIL,
  PROPERTY_DETAILS_SUCCESS,
  PROPERTY_DETAILS_FAIL,
} from "../constants/propertyconstants";

export const propertyReducer = (
  state = {
    properties: [],
    allProducts: [],
    currentPage: [],
    currentItemsPerPage: [],
    totalPages: [],
    error: [],
  },
  action
) => {
  switch (action.type) {
    case PROPERTY_LIST_SUCCESS:
      return {
        loading: false,
        properties: action.payload.properties,
        currentItemsPerPage: action.payload.currentItemsPerPage,
        totalPages: action.payload.totalPages,
      };
    case PROPERTY_LIST_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const propertyDetailsReducer = (state = { property: {} }, action) => {
  // console.log("state", state);
  // console.log("action", action);
  switch (action.type) {
    case PROPERTY_DETAILS_SUCCESS:
      return { property: action.payload };
    case PROPERTY_DETAILS_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const addPropertyReducers = (state = {}, action) => {
  switch (action.type) {
    case PROPERTY_ADD_SUCCESS:
      return { properties: action.payload };
    case PROPERTY_ADD_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
