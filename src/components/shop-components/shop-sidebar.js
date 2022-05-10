import React from "react";

const Sidebar = (props) => {
  const { propertyType, setPropertyType, setCatagory, catagory } = props;
  return (
    <div className="col-lg-4  mb-100">
      <aside className="sidebar ltn__shop-sidebar">
        <h3 className="mb-10">Advance Information</h3>
        <label className="mb-30">
          <small>About 9,620 results (0.62 seconds) </small>
        </label>
        {/* Advance Information widget */}
        <div className="widget ltn__menu-widget">
          <h4 className="ltn__widget-title">Property Type</h4>
          <ul
            onChange={(e) => {
              setPropertyType([...propertyType, e.target.value]);
            }}
          >
            <li>
              <label className="checkbox-item">
                House
                <input
                  type="checkbox"
                  value={"House"} /* defaultChecked="checked" */
                />
                <span className="checkmark" />
              </label>
              {/* <span className="categorey-no">3,924</span> */}
            </li>
            <li>
              <label className="checkbox-item">
                Single Family
                <input type="checkbox" value={"Single Family"} />
                <span className="checkmark" />
              </label>
              {/* <span className="categorey-no">3,610</span> */}
            </li>
            <li>
              <label className="checkbox-item">
                Apartment
                <input type="checkbox" value={"Apartment"} />
                <span className="checkmark" />
              </label>
              {/* <span className="categorey-no">2,912</span> */}
            </li>
            <li>
              <label className="checkbox-item">
                Office Villa
                <input type="checkbox" value={"Office Villa"} />
                <span className="checkmark" />
              </label>
              {/* <span className="categorey-no">2,687</span> */}
            </li>
            <li>
              <label className="checkbox-item">
                Luxary Home
                <input type="checkbox" value={"Luxary Home"} />
                <span className="checkmark" />
              </label>
              {/* <span className="categorey-no">1,853</span> */}
            </li>
            <li>
              <label className="checkbox-item">
                Studio
                <input type="checkbox" value={"Studio"} />
                <span className="checkmark" />
              </label>
              {/* <span className="categorey-no">893</span> */}
            </li>
          </ul>
          <hr />
          <h4 className="ltn__widget-title">Choose Area</h4>
          <ul>
            <li>
              <label className="checkbox-item">
                Cairo
                <input type="checkbox" defaultChecked="checked" />
                <span className="checkmark" />
              </label>
              {/* <span className="categorey-no">3,924</span> */}
            </li>
            <li>
              <label className="checkbox-item">
                Giza
                <input type="checkbox" />
                <span className="checkmark" />
              </label>
              {/* <span className="categorey-no">3,610</span> */}
            </li>
          </ul>
          <hr />
          <h4 className="ltn__widget-title">Catagory</h4>
          <ul
            onChange={(e) => {
              // setCatagory(e.target.value)
              setCatagory([...catagory, e.target.value]);
            }}
          >
            <li>
              <label className="checkbox-item">
                Selling
                <input type="checkbox" value={"Sales"} />
                <span className="checkmark" />
              </label>
              {/* <span className="categorey-no">2,912</span> */}
            </li>
            <li>
              <label className="checkbox-item">
                Renting
                <input type="checkbox" value={"Rentals"} />
                <span className="checkmark" />
              </label>
              {/* <span className="categorey-no">3,610</span> */}
            </li>
          </ul>
          <hr />
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
