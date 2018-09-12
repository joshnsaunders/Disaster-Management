import React from 'react'

const TextDirections = () => {

  return (
    <div className="TextDirections">
      <div className="TextDirectionsTitle"><span className="textTitle">Text:</span><span className="textNumber"> 720-330-4081</span></div>
      <div className="textStyle messageDirections">Text the <span className="bold">&nbsp;key word&nbsp;</span> and details to submit your information.</div>
      <div className="textStyle TextDirectionsPerson">
        <span className="bold">people&nbsp;</span>your name, address and brief description to get help
      </div>
      <div className="textStyle TextDirectionsAdd">
        <span className="bold">updates&nbsp;</span> to get important updates like reservoir releases
      </div>
      <div className="textStyle TextDirectionsPick">
        <span className="bold">pick&nbsp;</span> or<span className="bold">&nbsp;drop&nbsp;</span> and address to set a pick up or drop off spot
      </div>
      <div className="textStyle TextDirectionsFlood">
        <span className="bold">flood&nbsp;</span> and the address to report flooding
      </div>
      <div className="textStyle TextDirectionsElectricity">
        <span className="bold">power&nbsp;</span> and the address to report dangerous power lines
      </div>
      <div className="textStyle TextDirectionsTree">
        <span className="bold">tree&nbsp;</span> and the address to report a downed or submerged tree
      </div>
    </div>
  )
}

export default TextDirections
