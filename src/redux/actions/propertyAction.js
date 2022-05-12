import { api } from "./config";
import {
  PROPERTY_ADD_SUCCESS,
  PROPERTY_ADD_FAIL,
  PROPERTY_LIST_SUCCESS,
  PROPERTY_LIST_FAIL,
  PROPERTY_DETAILS_SUCCESS,
  PROPERTY_DETAILS_FAIL,
  PROPERTY_SEARCH_SUCCESS,
  PROPERTY_SEARCH_FAIL,
  PROPERTY_EDIT_SUCCESS,
  PROPERTY_EDIT_FAIL,
  PROPERTY_DELETE_SUCCESS,
  PROPERTY_DELETE_FAIL,
} from "../constants/propertyconstants";

// export const listProperty = (itemsPerPage, pageNumber) => async (dispatch) => {
//   try {
//     const { data } = await api.get(
//       `/property/?page=${pageNumber}&itemsPerPage=${itemsPerPage}`
//     );
//     dispatch({ type: PROPERTY_LIST_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: PROPERTY_LIST_FAIL, payload: error.message });
//   }
// };

/**mine **/
export const listProperty = (skip, limit, filter, search) => async dispatch => {
  try {
    let result = await fetch("https://quater-real-state.herokuapp.com/property/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        skip,
        limit,
        filter,
        search,
      }),
    });
    result = await result.json();
    let data = await result;
    dispatch({ type: PROPERTY_LIST_SUCCESS, payload: data.result });
  } catch (error) {
    dispatch({ type: PROPERTY_LIST_FAIL, payload: error.message });
  }
};

export const detailsProperty = propertyId => async dispatch => {
  try {
    const { data } = await api.get(`/property/${propertyId}`);
    dispatch({ type: PROPERTY_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PROPERTY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const searchAction = search => async dispatch => {
  try {
    const { data } = await api.get(`/property/search/${search}`);
    dispatch({ type: PROPERTY_SEARCH_SUCCESS, payload: data });
    dispatch({ type: PROPERTY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PROPERTY_SEARCH_FAIL,
      payload: error.message,
    });
  }
};

export const editProperty =
  (
    propertyId,
    title,
    description,
    price,
    typeOfProperty,
    saleType,
    saleStatus,
    imagesList,
    video,
    city,
    address,
    neighborhood,
    size,
    rooms,
    bedrooms,
    bathrooms,
    garages,
    yearBuilt,
    available,
    basement,
    extraDetails,
    roofing,
    floorNumber
  ) =>
  async dispatch => {
    try {
      const { data } = await api.put(`/property/edit-listing/${propertyId}`, {
        title,
        description,
        price,
        typeOfProperty,
        saleType,
        saleStatus,
        imagesList,
        video,
        city,
        address,
        neighborhood,
        size,
        rooms,
        bedrooms,
        bathrooms,
        garages,
        yearBuilt,
        available,
        basement,
        extraDetails,
        roofing,
        floorNumber,
      });
      dispatch({ type: PROPERTY_EDIT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PROPERTY_EDIT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const addpropertyAction =
  (
    title,
    description,
    price,
    typeOfProperty,
    saleType,
    saleStatus,
    images,
    video,
    city,
    address,
    neighborhood,
    size,
    rooms,
    bedrooms,
    bathrooms,
    garages,
    yearBuilt,
    available,
    basement,
    extraDetails,
    roofing,
    floorNumber
  ) =>
  async dispatch => {
    try {
      const { data } = await api.post("/property/addproperty", {
        title,
        description,
        price,
        typeOfProperty,
        saleType,
        saleStatus,
        images,
        video,
        city,
        address,
        neighborhood,
        size,
        rooms,
        bedrooms,
        bathrooms,
        garages,
        yearBuilt,
        available,
        basement,
        extraDetails,
        roofing,
        floorNumber,
      });
      dispatch({ type: PROPERTY_ADD_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: PROPERTY_ADD_FAIL,
        payload: error.message,
      });
    }
  };

export const deletePropertAction = propertyId => async dispatch => {
  console.log("propertyId", propertyId);
  try {
    const { data } = await api.delete(`/property/delete/${propertyId}`);
    dispatch({ type: PROPERTY_DELETE_SUCCESS, payload: data });
    dispatch({ type: PROPERTY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PROPERTY_DELETE_FAIL,
      payload: error.message,
    });
  }
};
