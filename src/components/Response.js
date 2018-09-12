import React from 'react';
import ControlBar from './controlBar'
import Timer from './timer'

const Response = ({ tiles, update, controlbar, updateControlBar, showPopUp, togglePopUp, type, updateType }) => {

  const titleClasses = (data) => {
    const clss = ['tileTitle']
    if (data.title === 'Flood') {
      clss.push('Flood')
    }
    else if (data.title === 'Down Tree') {
      clss.push('Tree')
    }
    else if (data.title === 'Live Electrical') {
      clss.push('Electrical')
    }
    else if (data.title === 'Shelter') {
      clss.push('Shelter')
    }
    else if (data.title === 'Drop Off/Pick Up') {
      clss.push('PickUp')
    }
    else if (data.title === 'Person' || data.title === 'People') {
      clss.push('Person')
    }
    if (data.selected) {
      clss.push('gray')
    }
    return clss.join(' ')
  }

  const prioritize = (data) => {
    console.log(`data`, data);
    let priority = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].title === 'Person' || data[i].title === 'People') {
        priority.push(data[i])
      }
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i].title !== 'Person' && data[i].title !== 'People') {
        priority.push(data[i])
      }
    }
    return priority
  }

  const toggleSafe = data => {
    if (data.safe) {
      data.safe = false
    } else {
      data.safe = true
    }



    update(tiles)
  }

  const selectClick = data => {
    if (data.selected) {
      data.selected = false
    } else {
      data.selected = true
    }
    update(tiles)
  }

  const checked = data => {
    if (data.selected) {
      return true
    } else { return false }
  }

  const timer = data => {
    const time = Date.parse(new Date()) - data.date
    data.seconds = Math.floor((time / 1000) % 60);
    data.minutes = Math.floor((time / 1000 / 60) % 60);
    data.hours = Math.floor(time / (1000 * 60 * 60) % 24);
    data.days = Math.floor(time / (1000 * 60 * 60 * 24));
    console.log(`time`, time);
    //console.log(`seconds`, seconds, `minutes`, minutes, `hours`, hours);
    update(tiles)
  }

  const display = (data) => {
    let clss = []
    if (data.display) {
      clss.push("tileWrapper show")
    } else clss.push("tileWrapper hide")
    if (data.selected) {
      clss.push("gray")
    }
    if (data.selected === false) {
      clss.push('box-shadow')
    }
    return clss.join(" ")
  }

  const safetyCheck = (data) => {
    let clss = ["safe"]

    if (data.selected) {
      clss.push("gray")
    }

    return clss.join(" ")
  }

  const availability = (data) => {
    data.inUse = data.inUse - 1
    update(tiles)
  }

  const noRoom = (data) => {
    data.inUse = data.inUse + 1
    update(tiles)
  }

  return (
    <div>
      <ControlBar
        updateControlBar={updateControlBar}
        controlbar={controlbar}
        tiles={tiles}
        update={update}
        showPopUp={showPopUp}
        togglePopUp={togglePopUp}
        type={type}
        updateType={updateType}
      />
      <div className="responseWrapper">
        {tiles.map((data, index) => (
          <div key={index}>
            <div className={display(data)}>
              <div className={titleClasses(data)}>{data.title}</div>
              <div className="tileLocation">{data.location}</div>
              <div className="tileDescription">{data.description}</div>
              <div className={data.person ? "show dateSafe" : "hide"}>
                <Timer time={data} />
                <div className={safetyCheck(data)}>
                  <div className="safeTitle">Safe</div>
                  <div className="safeInput"><input type="checkbox" onClick={selectClick.bind(this, data)} checked={checked(data)} /></div>
                </div>
              </div>

              <div className={data.shelter ? "shelterFooter" : "hide"}>
                <div className="capacity">Capacity: {data.capacity}</div>
                <div className="availability">Avail: {data.capacity - data.inUse}</div>
                <div
                  className="plus"
                  onClick={availability.bind(this, data)}
                >
                  +
              </div>
                <div
                  className="minus"
                  onClick={noRoom.bind(this, data)}
                >
                  -
              </div>
              </div>

            </div>
          </div>
        ))
        }
      </div>
    </div>
  );
}

export default Response
