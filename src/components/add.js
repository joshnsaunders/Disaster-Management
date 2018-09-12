import React from "react";

const Add = ({ showPopUp, togglePopUp, type, updateType }) => {
  console.log(showPopUp);

  const selectType = (event) => {
    console.log(`event`, event.target.value);
    console.log('select type');
    updateType(event.target.value)
  }
  const name = (type) => {
    console.log(`type`, type);
    let clss = []
    if (type === 'Shelter' || type === 'Person') {
      clss.push("nameType show")
    }
    else { clss.push("hide") }
    return clss.join('')
  }
  const submitInput = () => {
    console.log(`submit Input`);
  }

  return (
    <div>
      <div className="Add AddStyle" onClick={togglePopUp.bind(this)}>
        Add New Data
      </div>
      <div className={showPopUp ? "PopUp" : "hide"}>
        <div className="PopUpContent">
          <div className="closePopUp" onClick={togglePopUp.bind(this)}>
            X
          </div>
          <div className="addDataInputs">
            <div className="addDataTypes">
              <div className="addDataTypesType">Type</div>
              <select
                className="addDataSelect"
                onChange={selectType.bind(this)}
                value={type}
              >
                <option>Choose One</option>
                <option value="Person">Person</option>
                <option value="Shelter">Shelter</option>
                <option value="Flood">Flood</option>
                <option value="Down Tree">Down Tree</option>
                <option value="Live Electrical">Live Electrical</option>
                <option value="Drop Off/Pick Up">Drop Off/Pick Up</option>
              </select>
            </div>
            <div className={name(type)}>
              <div className="nameRow"> Name </div>
              <input id="nameInputs" className="Inputs" type="text" name="name" placeholder={type === 'Person' ? "Enter one name" : "Enter name of shelter"} />
            </div>

            <div className="addressType">
              <div className="addressRow"> Address </div>
              <input id="addressInputs" className="Inputs" type="text" name="address" placeholder="Street Address, City, State, Zip Code" />
            </div>

            <div className={name(type)}>
              <div className="phoneRow"> Contact # </div>
              <input id="phoneInputs" className="Inputs" type="text" name="description" placeholder="Phone Number" />
            </div>

            <div className="descriptionType">
              <div className="descriptionRow"> Description </div>
              <textarea id="descriptiveInputs" className="descriptionInputs" type="text" name="description" placeholder="How many people? Ages? What is the problem? Anything else first responders need to know?"></textarea>
            </div>

            <div className={type === 'Shelter' ? "shelterType" : "hide"}>
              <div className="capacityRow">Capacity </div> <input id="capacityInputs" className="capacityInputs" type="text" name="capacity" placeholder="Enter Number" />
              <div className="availRow">Avail </div> <input id="availInputs" className="availInputs" type="text" name="avail" placeholder="Enter Number" />
            </div>

            <div
              onClick={submitInput.bind(this)}
              className="inputButton">
              Submit
              </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
