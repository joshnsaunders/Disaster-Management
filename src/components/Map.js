import React, {
  Component
} from "react";
import {
  floodCoords
} from './data.js'
//import SimulationButton from './simulationButton'

const MarkerWithLabel = require("markerwithlabel")(window.google.maps);

export default class Map extends Component {
  componentDidMount() {
    var map = new window.google.maps.Map(document.getElementById("map"), {
      center: {
        lat: 39.756177,
        lng: -104.970738
      },
      zoom: 14,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: window.google.maps.ControlPosition.BOTTOM_CENTER
      },
      mapTypeId: window.google.maps.MapTypeId.ROADMAP
    });
    var poly = new window.google.maps.Polygon({
      map: map,
      path: [],
      strokeColor: "#081EFC",
      strokeOpacity: 0.8,
      strokeWeight: 0,
      fillColor: "#7B86FB",
      fillOpacity: 0.8
    });

    function Loop(i) {
      setTimeout(function () {

        var person = new MarkerWithLabel({
          position: {
            lat: floodCoords[i]['lat'],
            lng: floodCoords[i]['lng']
          },
          icon: {
            path: "M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0",
            fillColor: "lightblue",
            fillOpacity: 0.9,
            strokeColor: "blue",
            strokeWeight: 1.1,
            scale: 0.15
          },
          draggable: true,
          raiseOnDrag: true,
          map: map,
          // labelContent: "$425K",
          labelAnchor: new window.google.maps.Point(4, 22),
          labelClass: "", // the CSS class for the label
          labelStyle: {
            opacity: 0.75
          }
        });

        i++;
        if (i < floodCoords.length) {
          Loop(i);
          if (i === 15) {
            var tree = new MarkerWithLabel({
              position: {
                lat: 39.760384,
                lng: -104.999656
              },
              icon: {
                path: "M22-48h-44v43h16l6 5 6-5h16z",
                fillColor: "green",
                fillOpacity: 0.6,
                strokeColor: "",
                strokeWeight: 0.5,
                scale: 0.4
              },
              draggable: true,
              raiseOnDrag: true,
              map: map,
              // labelContent: "$425K",
              labelAnchor: new window.google.maps.Point(4.5, 15),
              labelClass: "labels fa fa-tree", // the CSS class for the label
              labelStyle: {
                opacity: 0.75
              }
            });
          }
          if (i === 18) {
            var singlePerson = new MarkerWithLabel({
              position: {
                lat: 39.756194,
                lng: -105.005321,
              },
              icon: {
                path: "M22-48h-44v43h16l6 5 6-5h16z",
                fillColor: "red",
                fillOpacity: 0.9,
                strokeColor: "",
                strokeWeight: 0.5,
                scale: 0.65
              },
              draggable: true,
              raiseOnDrag: true,
              map: map,
              // labelContent: "$425K",
              labelAnchor: new window.google.maps.Point(5, 24),
              labelClass: "white labels fa fa-user", // the CSS class for the label
              labelStyle: {
                opacity: 0.75
              }
            });
          }
          if (i === 28) {
            var liveWire = new MarkerWithLabel({
              position: {
                lat: 39.750519,
                lng: -105.012016
              },
              icon: {
                path: "M22-48h-44v43h16l6 5 6-5h16z",
                fillColor: "red",
                fillOpacity: 0.6,
                strokeColor: "",
                strokeWeight: 0.5,
                scale: 0.4
              },
              draggable: true,
              raiseOnDrag: true,
              map: map,
              // labelContent: "$425K",
              labelAnchor: new window.google.maps.Point(2.5, 16),
              labelClass: "labels fa fa-bolt", // the CSS class for the label
              labelStyle: {
                opacity: 0.75
              }
            });
          }

          if (i === 33) {
            var people = new MarkerWithLabel({
              position: {
                lat: 39.744052,
                lng: -105.009827,
              },
              icon: {
                path: "M22-48h-44v43h16l6 5 6-5h16z",
                fillColor: "red",
                fillOpacity: 0.9,
                strokeColor: "",
                strokeWeight: 0.5,
                scale: 0.65
              },
              draggable: true,
              raiseOnDrag: true,
              map: map,
              // labelContent: "$425K",
              labelAnchor: new window.google.maps.Point(7.8, 24),
              labelClass: "white labels fa fa-users", // the CSS class for the label
              labelStyle: {
                opacity: 0.75
              }
            });
          }
          if (i === 48) {
            var pickUp = new MarkerWithLabel({
              position: {
                lat: 39.740103,
                lng: -104.990004
              },
              icon: {
                path: "M22-48h-44v43h16l6 5 6-5h16z",
                fillColor: "#f29f1a",
                fillOpacity: 0.8,
                strokeColor: "",
                strokeWeight: 0.5,
                scale: 0.5
              },
              draggable: true,
              raiseOnDrag: true,
              map: map,
              // labelContent: "$425K",
              labelAnchor: new window.google.maps.Point(6, 17),
              labelClass: "labels fa fa-car", // the CSS class for the label
              labelStyle: {
                opacity: 0.75
              }
            });
          }
          if (i === 52) {
            var shelter = new MarkerWithLabel({
              position: {
                lat: 39.756421,
                lng: -104.968196
              },
              icon: {
                path: "M22-48h-44v43h16l6 5 6-5h16z",
                fillColor: "#F3E422",
                fillOpacity: 0.8,
                strokeColor: "",
                strokeWeight: 0.5,
                scale: 0.6
              },
              draggable: true,
              raiseOnDrag: true,
              map: map,
              // labelContent: "$425K",
              labelAnchor: new window.google.maps.Point(7.5, 23),
              labelClass: "houseSize labels fa fa-home", // the CSS class for the label
              labelStyle: {
                opacity: 0.75
              }
            });
          }


        }
      }, 250);
    }

    map.addListener("click", function () {
      Loop(0);
    });












  }

  render() {
    return (<
      div id="app" >
      <
        div id="map" />
      <
      /div>
    );
  }
}
