import React from 'react';

const Hero = () => {
  return(
    <div className="heroWrapper">
      <div className="helpTile heroTile">
        <div className="helpContent">Need Help?</div>
        <div className="helpContent">If possible, Get App Here</div>
        <div className="helpContent">Or, Text 123-456-7890</div>
        <div className="helpContent">with your</div>
        <div className="helpContent">Name, Address, Age</div>
        <div className="helpContent">and a brief description.</div>
      </div>

      <div className=" responseTile heroTile">
        <div className="responseContent">Responding to an Emergency?</div>
        <div className="responseContent">Coordinate your search with Smart Response</div>
        <div className="responseContent">Maximize the help of volunteers</div>
        <div className="responseContent">See a live map of help requests</div>
        <div className="responseContent">Get the Data you need, now.</div>
        <div className="responseContent">Get App Here.</div>
      </div>


      <div className="aboutTile heroTile">
        <div className="aboutContent">About Us</div>
        <div className="aboutContent">Disaster Management Techonology was created after a rash of Hurricanes in 2017</div>
        <div className="aboutContent">We believe we can utilize technology to better support first responders and brave volunteers</div>
        <div className="aboutContent">We believe in increasing communication during crises to coordinate a safe and efficient response.</div>
      </div>
    </div>
  );
}

export default Hero
