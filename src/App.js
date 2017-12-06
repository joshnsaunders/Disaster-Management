import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { tiles } from "./components/data";
//components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Response from "./components/Response";
import Map from "./components/Map";
import Tileview from "./components/Tileview";
import About from "./components/About";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: tiles
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Hero} />
            <Route path="/map" component={Map} />
            <Route
              path="/response"
              component={props => (
                <Response
                  originalData={tiles}
                  tiles={this.state.tiles}
                  update={tls => {
                    console.log("updateTiles"),
                      this.setState({ ...this.state, tiles: tls });
                  }}
                />
              )}
            />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
