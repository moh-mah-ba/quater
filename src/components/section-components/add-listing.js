import React, { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import axios from "axios";
import { addpropertyAction } from "../../redux/actions/propertyAction";
import { useNavigate } from "react-router-dom";


const AddListing = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [typeOfProperty, setTypeOfProperty] = useState("");
  const [saleType, setSaleType] = useState("");
  const [saleStatus, setSaleStatus] = useState("");
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [size, setSize] = useState("");
  const [rooms, setRooms] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [garages, setGarages] = useState("");
  const [basement, setBasement] = useState("");
  const [extraDetails, setExtraDetails] = useState("");
  const [roofing, setRoofing] = useState("");
  const [floorNumber, setFloorNumber] = useState(0);
  const [yearBuilt, setYearBuilt] = useState();
  const [available, setAvailable] = useState();


  const navigate = useNavigate();

  const [selectedImages, setSelectedImages] = useState([]);
  const [uploded , setUploded] = useState(false);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    
    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
    
  };
  


  const uploadImage = async () => {
    
    for (let i = 0; i < selectedImages.length; i++) {
      
      let file = selectedImages[i];
      axios({
        method: "get",
        url: file,
        responseType: "blob",
      }).then((response) => {
        let reader = new FileReader();
        reader.readAsDataURL(response.data);
        reader.onloadend = () => {
          let base64data = reader.result;
          const formData = new FormData();
          formData.append("file", base64data);
          formData.append("api_key", 649836794481793);
          formData.append("upload_preset", "hlavypdy");
          axios.post("https://api.cloudinary.com/v1_1/dembs0jhl/image/upload" , formData)
          .then(async (res) => {
            const imageURL = res;
            console.log("res" , res)
            setImages(old => [...old , imageURL.data.secure_url])            
          })
          }
        })
      }
      setUploded(true)
    };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addpropertyAction(
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
      )
    );
    e.target.reset();
    setSelectedImages("")
    
    navigate("/")
  };

  const addProperty = useSelector((state) => state.addPropertyReducers);
  const {error} = addProperty;

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
                        placeholder="*Title (mandatory)"
                        required
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div className="input-item input-item-textarea ltn__custom-icon">
                      <textarea
                        name="ltn__message"
                        placeholder="Description"
                        defaultValue={""}
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
                        value={typeOfProperty}
                        className="nice-select"
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
                        value={saleType}
                        className="nice-select"
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
                        value={saleStatus}
                        className="nice-select"
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
                  <div className="col-md-6 mb-3">
                    <div className="input-item">
                      <input
                        type="file"
                        id="myFile"
                        name="filename"
                        className="btn theme-btn-3 mb-10"
                        onChange={onSelectFile}
                        multiple
                        accept="image/*"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-3">
                  {selectedImages.length > 0 &&
                      (selectedImages.length > 5 ? (
                        <p className="error">
                          You can't upload more than 5 images! <br />
                          <span>
                            please delete <b> {selectedImages.length - 5} </b> of them{" "}
                          </span>
                        </p>
                      ) : (
                        <button
                        type="button" className={`btn ${uploded ? "btn-success" : "btn-primary"}`}
                          onClick={uploadImage}
                          disabled={uploded}
                        >
                          UPLOAD {selectedImages.length} IMAGE
                          {selectedImages.length === 1 ? "" : "S"}
                        </button>
                      ))}
                  </div>
                  <div className="col-12">
                    {selectedImages && selectedImages.map((image, index) => {
                      return(
                        <div  key={index} className="col-2 border m-3 d-inline-block">
                           <img
                              src={image}
                              alt="uploud"
                             
                            />
                            <div className="d-flex justify-content-between">
                              <p>{index + 1}</p>
                              <button type="button" className={`btn-danger ${uploded? "d-none" : "d-inline-block"}`}
                                onClick={() =>
                                  setSelectedImages(selectedImages.filter((e) => e !== image))
                                }
                              >
                                delete image
                              </button>
                            </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <br />
                <p>
                  <small>
                    * At least 1 image is required for a valid
                    submission.Minimum size is 500/500px.
                  </small>
                  <br />
                  <small>* up to 5 images</small>
                  <br />
                  <small>* Images might take longer to be processed.</small>
                </p>
                <h6>Video Option</h6>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-item input-item-name ltn__custom-icon">
                      <input
                        type="text"
                        name="ltn__name"
                        placeholder="youtube video link"
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
                        placeholder="City"
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

export default AddListing;
