import React from 'react';

const People = ({ tiles }) => {


  const checkPeople = (tiles) => {
    console.log(`tiles`, tiles);
    let totalPeople = 0
    for (let i = 0; i < tiles.length; i++) {
      if (tiles[i].title === 'People' && tiles[i].selected === false) {
        console.log('person');
        totalPeople++
      } else if (tiles[i].title === 'Person' && tiles[i].selected === false) {
        totalPeople++
      }
    }
    return totalPeople
  }

  const checkShelter = (tiles) => {
    let shelterCapacity = []
    for (let i = 0; i < tiles.length; i++) {
      if (tiles[i].title === 'Shelter') {
        shelterCapacity.push(tiles[i].capacity - tiles[i].inUse)
      }
    }
    var sum = shelterCapacity.reduce((a, b) => a + b, 0);

    return sum
  }

  return (
    <div className="peopleShelter">
      <div className="peopleCounter">People: {checkPeople(tiles)}</div>
      <div className="shelterCapacity">Shelter Capacity: {checkShelter(tiles)}</div>
    </div>
  )
}

export default People
