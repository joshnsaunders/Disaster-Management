import React from "react";
import Add from './add'
import People from './people'

const ControlBar = ({ tiles, update, controlbar, updateControlBar, showPopUp, togglePopUp, type, updateType }) => {

  const prioritizePeople = (data) => {
    { console.log(controlbar.all); }
    let people = [];
    data.sort(function (a, b) {
      return a.id - b.id;
    });

    for (let i = 0; i < data.length; i++) {
      if (data[i].title === "Person" || data[i].title === "People") {
        data[i].display = true;
        people.push(data[i]);
      }
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i].title !== "Person" && data[i].title !== "People") {
        data[i].display = false;
        people.push(data[i]);
      }
    }
    controlbar.all = false
    controlbar.people = true
    controlbar.car = false
    controlbar.electrical = false
    controlbar.shelter = false
    controlbar.tree = false
    controlbar.water = false
    updateControlBar(controlbar);
    update(people);
  };

  const prioritizeCar = data => {
    data.sort(function (a, b) {
      return a.id - b.id;
    });

    let car = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].title === "Drop Off/Pick Up") {
        data[i].display = true;
        car.push(data[i]);
      }
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i].title !== "Drop Off/Pick Up") {
        data[i].display = false;
        car.push(data[i]);
      }
    }

    controlbar.all = false
    controlbar.people = false
    controlbar.car = true
    controlbar.electrical = false
    controlbar.shelter = false
    controlbar.tree = false
    controlbar.water = false

    updateControlBar(controlbar);
    update(car);
  };

  const prioritizeElectrical = data => {
    data.sort(function (a, b) {
      return a.id - b.id;
    });

    let electrical = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].title === "Live Electrical") {
        data[i].display = true;
        electrical.push(data[i]);
      }
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i].title !== "Live Electrical") {
        data[i].display = false;
        electrical.push(data[i]);
      }
    }

    controlbar.all = false
    controlbar.people = false
    controlbar.car = false
    controlbar.electrical = true
    controlbar.shelter = false
    controlbar.tree = false
    controlbar.water = false

    updateControlBar(controlbar);
    update(electrical);
  };

  const prioritizeShelter = data => {
    data.sort(function (a, b) {
      return a.id - b.id;
    });
    let shelter = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].title === "Shelter") {
        data[i].display = true;
        shelter.push(data[i]);
      }
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i].title !== "Shelter") {
        data[i].display = false;
        shelter.push(data[i]);
      }
    }

    controlbar.all = false
    controlbar.people = false
    controlbar.car = false
    controlbar.electrical = false
    controlbar.shelter = true
    controlbar.tree = false
    controlbar.water = false

    updateControlBar(controlbar);
    update(shelter);
  };

  const prioritizeTree = data => {
    data.sort(function (a, b) {
      return a.id - b.id;
    });
    let tree = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].title === "Down Tree") {
        data[i].display = true;
        tree.push(data[i]);
      }
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i].title !== "Down Tree") {
        data[i].display = false;
        tree.push(data[i]);
      }
    }

    controlbar.all = false
    controlbar.people = false
    controlbar.car = false
    controlbar.electrical = false
    controlbar.shelter = false
    controlbar.tree = true
    controlbar.water = false

    updateControlBar(controlbar);
    update(tree);
  };

  const prioritizeFlood = data => {
    data.sort(function (a, b) {
      return a.id - b.id;
    });
    let flood = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i].title === "Flood") {
        data[i].display = true;
        flood.push(data[i]);
      }
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i].title !== "Flood") {
        data[i].display = false;
        flood.push(data[i]);
      }
    }
    controlbar.all = false
    controlbar.people = false
    controlbar.car = false
    controlbar.electrical = false
    controlbar.shelter = false
    controlbar.tree = false
    controlbar.water = true

    updateControlBar(controlbar);
    update(flood);
  };

  const prioritizeAll = (data, controlbar) => {
    data.sort(function (a, b) {
      return a.id - b.id;
    });
    let all = [];

    for (let i = 0; i < data.length; i++) {
      data[i].display = true;
      all.push(data[i]);
    }

    controlbar.all = true
    controlbar.people = false
    controlbar.car = false
    controlbar.electrical = false
    controlbar.shelter = false
    controlbar.tree = false
    controlbar.water = false

    updateControlBar(controlbar);
    update(all);
  }
  const controlAll = (data) => {
    console.log(data);
    if (data.all) {
      return "controlBarOneSelected"
    } else { return "controlBarOne" }
  }
  const fixed = () => {
    console.log('hi');
  }

  return (

    <div
      className="controlBar"
      onScroll={fixed()}>
      <div className="checkboxes">
        <div
          onClick={prioritizeAll.bind(this, tiles, controlbar)}
          className={controlbar.all ? "controlBarOneSelected controlBarOne" : "controlBarOne"}
        >
          All
        </div>
        <div
          onClick={prioritizePeople.bind(this, tiles, controlbar)}
          className={controlbar.people ? "labels fa fa-users controlBarTwoSelected" : "labels fa fa-users controlBarTwo"}
        />
        <div
          onClick={prioritizeCar.bind(this, tiles, controlbar)}
          className={controlbar.car ? "labels fa fa-car controlBarThreeSelected" : "labels fa fa-car controlBarThree"}
        />
        <div
          onClick={prioritizeElectrical.bind(this, tiles)}
          className={controlbar.electrical ? "labels fa fa-bolt controlBarFourSelected" : "labels fa fa-bolt controlBarFour"}
        />
        <div
          onClick={prioritizeShelter.bind(this, tiles)}
          className={controlbar.shelter ? "labels fa fa-home controlBarFiveSelected" : "labels fa fa-home controlBarFive"}
        />
        <div
          onClick={prioritizeTree.bind(this, tiles)}
          className={controlbar.tree ? "labels fa fa-tree controlBarSixSelected" : "labels fa fa-tree controlBarSix"}
        />
        <div
          onClick={prioritizeFlood.bind(this, tiles)}
          className={controlbar.water ? "labels fa fa-tint controlBarSevenSelected" : "labels fa fa-tint controlBarSeven"}
        />
      </div>
      <div />
      <Add
        togglePopUp={togglePopUp}
        showPopUp={showPopUp}
        type={type}
        updateType={updateType}
      />
      <People
        tiles={tiles}
      />
    </div>
  );
};

export default ControlBar;
