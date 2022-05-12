import React from "react";

const Sidebar = props => {
  const { propertyType, setPropertyType, setCatagory, catagory, setFilter } =
    props;

  const onChangeHandler = e => {
    // console.log(e.target.value);
    let targetValueName = e.target.value;
    console.log(e.target.checked);
    // setFilter(prevState => {
    //   return { ...prevState, [e.target.value]: !prevState[e.target.value] };
    // });
    setFilter(prevState => {
      console.log(targetValueName);
      return { ...prevState, [targetValueName]: !prevState[targetValueName] };
    });
  };
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
          <ul onChange={e => onChangeHandler(e)}>
            <li>
              <label className="checkbox-item">
                Twin
                <input
                  type="checkbox"
                  value="Twin" /* defaultChecked="checked" */
                />
                <span className="checkmark" />
              </label>
              {/* <span className="categorey-no">3,924</span> */}
            </li>
            <li>
              <label className="checkbox-item">
                Duplex
                <input type="checkbox" value="Duplexes" />
                <span className="checkmark" />
              </label>
              {/* <span className="categorey-no">3,610</span> */}
            </li>
            <li>
              <label className="checkbox-item">
                Office
                <input type="checkbox" value="Office" />
                <span className="checkmark" />
              </label>
              {/* <span className="categorey-no">2,912</span> */}
            </li>
          </ul>
          <hr />
          <h4 className="ltn__widget-title">Choose Area</h4>
          <ul onChange={e => onChangeHandler(e)}>
            <li>
              <label className="checkbox-item" htmlFor="Cairo">
                Cairo
                <input type="checkbox" id="Cairo" value="Cairo" />
                <span className="checkmark" />
              </label>
            </li>

            <li>
              <label className="checkbox-item">
                Giza
                <input type="checkbox" value="Giza" />
                <span className="checkmark" />
              </label>
              {/* <span className="categorey-no">3,610</span> */}
            </li>
          </ul>
          <hr />
          <h4 className="ltn__widget-title">Catagory</h4>
          <ul onChange={e => onChangeHandler(e)}>
            <li>
              <label className="checkbox-item">
                Medical
                <input type="checkbox" value="Medical" />
                <span className="checkmark" />
              </label>
              {/* <span className="categorey-no">2,912</span> */}
            </li>
            <li>
              <label className="checkbox-item">
                Commercial
                <input type="checkbox" value="Commercial" />
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
