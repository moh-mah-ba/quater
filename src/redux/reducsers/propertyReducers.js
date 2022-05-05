import {
  PROPERTY_ADD_SUCCESS,
  PROPERTY_ADD_FAIL,
  PROPERTY_LIST_SUCCESS,
  PROPERTY_LIST_FAIL,
  PROPERTY_DETAILS_SUCCESS,
  PROPERTY_DETAILS_FAIL,
  PROPERTY_SEARCH_SUCCESS,
  PROPERTY_SEARCH_FAIL,
} from "../constants/propertyconstants";

export const propertyReducer = (
  state = {
    properties: [],
    images: [],
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
        properties: action.payload.properties,
        images: action.payload.images,
        currentItemsPerPage: action.payload.currentItemsPerPage,
        totalPages: action.payload.totalPages,
      };
    case PROPERTY_LIST_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const propertyDetailsReducer = (state = { property: {}, images: [] }, action) => {
  switch (action.type) {
    case PROPERTY_DETAILS_SUCCESS:
      return { property: action.payload , images: action.payload.images};
    case PROPERTY_DETAILS_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const searchPropertyReducer = (
  state = { searchList: [] },
  action
) => {
  switch (action.type) {
    case PROPERTY_SEARCH_SUCCESS:
      return { searchList: action.payload };
    case PROPERTY_SEARCH_FAIL:
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
