import React from "react";

const ControlBar = ({ tiles, update, originalData }) => {

  const prioritizePeople = data => {
    let people = [];

    data.sort(function(a, b) {
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

    update(people);
  };

  const prioritizeCar = data => {
    data.sort(function(a, b) {
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
    update(car);
  };

  const prioritizeElectrical = data => {
    data.sort(function(a, b) {
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
    update(electrical);
  };

  const prioritizeShelter = data => {
    data.sort(function(a, b) {
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
    update(shelter);
  };

  const prioritizeTree = data => {
    data.sort(function(a, b) {
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
    update(tree);
  };

  const prioritizeFlood = data => {
    data.sort(function(a, b) {
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
    update(flood);
  };

  const prioritizeAll = data => {
    data.sort(function(a, b) {
      return a.id - b.id;
    });
    let all = [];

    for (let i = 0; i < data.length; i++) {
      data[i].display = true;
      all.push(data[i]);
    }

    update(all);
  };

  return (
    <div className="controlBar">
      <div className="checkboxes">
        <div
          onClick={prioritizeAll.bind(this, tiles)}
          className="controlBarOne"
        >
          All
        </div>
        <div
          onClick={prioritizePeople.bind(this, tiles)}
          className="labels fa fa-users controlBarTwo"
        />
        <div
          onClick={prioritizeCar.bind(this, tiles)}
          className="labels fa fa-car controlBarThree"
        />
        <div
          onClick={prioritizeElectrical.bind(this, tiles)}
          className="labels fa fa-bolt controlBarFour"
        />
        <div
          onClick={prioritizeShelter.bind(this, tiles)}
          className="labels fa fa-home controlBarFive"
        />
        <div
          onClick={prioritizeTree.bind(this, tiles)}
          className="labels fa fa-tree controlBarSix"
        />
        <div
          onClick={prioritizeFlood.bind(this, tiles)}
          className="labels fa fa-tint controlBarSeven"
        />
      </div>
      <div />
      <div className="Add">
        <div>Title</div>
        <div>Address</div>
        <div>Description</div>
        <button>Add</button>
      </div>
    </div>
  );
};

export default ControlBar;
