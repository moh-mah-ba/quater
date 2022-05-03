import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { detailsProperty , editProperty} from "../../redux/actions/propertyAction";

const EditListing = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const propertyId = id;

  const propertyDetail = useSelector((state) => state.propertyDetailsReducer);
  const { property,  images,  error } = propertyDetail;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [typeOfProperty, setTypeOfProperty] = useState('');
  const [saleType, setSaleType] = useState("");
  const [saleStatus, setSaleStatus] = useState('');
  const [imagesList, setImagesList] = useState([""]);
  const [video, setVideo] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [size, setSize] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [garages, setGarages] = useState("");
  const [basement, setBasement] = useState("");
  const [extraDetails, setExtraDetails] = useState("");
  const [roofing, setRoofing] = useState("");
  const [floorNumber, setFloorNumber] = useState(0);
  const [yearBuilt, setYearBuilt] = useState("");
  const [available, setAvailable] = useState("");
  
  useEffect(() => {
    dispatch(detailsProperty(propertyId));
  }, [dispatch, propertyId]);


   useEffect(() => {
   
    setTitle(property.title);
    setDescription(property.description);
    setPrice(property.price);
    setTypeOfProperty(property.typeOfProperty);
    setSaleType(property.saleType);
    setSaleStatus(property.saleStatus);
    setImagesList(images);
    setVideo(property.video);
    setCity(property.city);
    setAddress(property.address);
    setNeighborhood(property.neighborhood);
    setSize(property.size);
    setRooms(property.rooms);
    setBedrooms(property.bedrooms);
    setBathrooms(property.bathrooms);
    setGarages(property.garages);
    setYearBuilt(property.yearBuilt);
    setAvailable(property.available);
    setBasement(property.basement);
    setExtraDetails(property.extraDetails);
    setRoofing(property.roofing);
    setFloorNumber(property.floorNumber);
  }, [
    property.title,
    property.description,
    property.price,
    property.typeOfProperty,
    property.saleType,
    property.saleStatus,
    property.images,
    property.video,
    property.city,
    property.address,
    property.neighborhood,
    property.size,
    property.rooms,
    property.bedrooms,
    property.bathrooms,
    property.garages,
    property.yearBuilt,
    property.available,
    property.basement,
    property.extraDetails,
    property.roofing,
    property.floorNumber,
  ])

  
  
  
  const navigate = useNavigate();
    

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      editProperty(
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
      )
    );
    e.target.reset();

    
    navigate(`/properties`)
  };

  return (
    <div className="ltn__appointment-area pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__appointment-inner">
              <form onSubmit={submitHandler}>
                <h2>1. Description</h2>
                <p>
                  <small>
                    These fields are mandatory: Title, Property Media
                  </small>
                </p>
                <p className="text-danger">{error}</p>
                <h6>Property Description</h6>
                <div className="row">
                  <div className="col-md-12">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        value={title}
                        placeholder="*Title (mandatory)"
                        required
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div className="input-item input-item-textarea ltn__custom-icon">
                      <textarea
                        name="ltn__message"
                        placeholder="Description"
                        value={description}
                        required
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <h6>Property Price</h6>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="Price in $ (only numbers)"
                        value={price}
                        required
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <h6>Select Categories</h6>
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="input-item">
                      <select
                        className="nice-select"
                        value={typeOfProperty}
                        required
                        onChange={(e) => setTypeOfProperty(e.target.value)}
                      >
                        <option>None</option>
                        <option>Apartments</option>
                        <option>Condos</option>
                        <option>Duplexes</option>
                        <option>Houses</option>
                        <option>Industrial</option>
                        <option>Land</option>
                        <option>Offices</option>
                        <option>Retail</option>
                        <option>Villas</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="input-item">
                      <select
                        className="nice-select"
                        value={saleType}
                        required
                        onChange={(e) => setSaleType(e.target.value)}
                      >
                        <option>None</option>
                        <option>Rentals</option>
                        <option>Sales</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="input-item">
                      <select
                        className="nice-select"
                        value={saleStatus}
                        required
                        onChange={(e) => setSaleStatus(e.target.value)}
                      >
                        <option>no status</option>
                        <option>Active</option>
                        <option>hot offer</option>
                        <option>new offer</option>
                        <option>open house</option>
                        <option>sold</option>
                      </select>
                    </div>
                  </div>
                </div>
                <h2>2. Media</h2>
                <h6>Listing Media</h6>
                <div className="row">
                  <div className="col-12">
                    {images &&
                      images.map((image, index) => {
                        return (
                          <div
                            key={index}
                            className="col-3 border m-3 d-inline-block"
                          >
                            <img src={image} alt="uploud" />
                            <div className="d-flex justify-content-between">
                              <p>{index + 1}</p>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
                <br />
                <p>
                </p>
                <h6>Video Option</h6>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="youtube video link"
                        value={video}
                        onChange={(e) => setVideo(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <h2>3. Location</h2>
                <h6>Listing Location</h6>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="*City"
                        value={city}
                        required
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="*Address"
                        value={address}
                        required
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="Neighborhood"
                        value={neighborhood}
                        required
                        onChange={(e) => setNeighborhood(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <h2>4. Details</h2>
                <h6>Listing Details</h6>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="Size in meter (*only numbers)"
                        value={size}
                        required
                        onChange={(e) => setSize(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="Rooms (*only numbers)"
                        value={rooms}
                        required
                        onChange={(e) => setRooms(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="Bedrooms (*only numbers)"
                        value={bedrooms}
                        required
                        onChange={(e) => setBedrooms(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="Bathrooms (*only numbers)"
                        value={bathrooms}
                        required
                        onChange={(e) => setBathrooms(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="Garages (*text)"
                        value={garages}
                        required
                        onChange={(e) => setGarages(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="Basement (*text)"
                        value={basement}
                        required
                        onChange={(e) => setBasement(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="Extra Details (*text)"
                        value={extraDetails}
                        required
                        onChange={(e) => setExtraDetails(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="Roofing (*text)"
                        value={roofing}
                        required
                        onChange={(e) => setRoofing(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item">
                      <select
                        value={floorNumber}
                        className="nice-select"
                        required
                        onChange={(e) => setFloorNumber(e.target.value)}
                      >
                        <option>Floors No</option>
                        <option>Not Available</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon border p-3">
                      <label>Year Built (*numeric):</label>
                      <input
                        type="text"
                        id="Year Built (*only numbers)"
                        name="Year Built (*only numbers)"
                        value={yearBuilt}
                        required
                        onChange={(e) => setYearBuilt(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon border p-3">
                      <label>Available from (*date):</label>
                      <input
                        type="text"
                        id="Available from (*only numbers)"
                        name="Available from (*only numbers)"
                        value={available}
                        required
                        onChange={(e) => setAvailable(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="alert alert-warning d-none" role="alert">
                  Please note that the date and time you requested may not be
                  available. We will contact you to confirm your actual
                  appointment details.
                </div>
                <div className="btn-wrapper text-center mt-30">
                  <button
                    className="btn theme-btn-1 btn-effect-1 text-uppercase"
                    type="submit"
                  >
                    Submit Property
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditListing;
