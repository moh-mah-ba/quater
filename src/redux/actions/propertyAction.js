import { api } from "./config";
import {
  PROPERTY_ADD_SUCCESS,
  PROPERTY_ADD_FAIL,
  PROPERTY_LIST_SUCCESS,
  PROPERTY_LIST_FAIL,
  PROPERTY_DETAILS_SUCCESS,
  PROPERTY_DETAILS_FAIL,
} from "../constants/propertyconstants";


export const listProperty = (itemsPerPage, pageNumber) => async (dispatch) => {
  try {
    const { data } = await api.get(
      `/property/?page=${pageNumber}&itemsPerPage=${itemsPerPage}`
    );
    dispatch({ type: PROPERTY_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PROPERTY_LIST_FAIL, payload: error.message });
  }
};

export const detailsProperty = (propertyId) => async (dispatch) => {
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
  async (dispatch) => {
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
