import React, { Component } from "react";
import "./App.css";
import CoffeeButton from "./components/CoffeeButton";
import CoffeeControl from "./components/CoffeeControl";
import CoffeeInfo from "./components/CoffeeInfo";
import CoffeeRecipe from "./components/CoffeeRecipe";
import Thermos from "./components/Thermos";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { brewedAt: "2022-02-28T09:17:57.652Z", litersBrewed: "1.5" };
  }
  handleOnClick = (newLiters) => {
    console.log(newLiters);
    this.setState({ litersBrewed: newLiters });
  };
  render() {
    return (
      <div className="App">
        <header></header>
        <main>
          <div id="examples">
            <h1>Examples</h1>
            <Thermos {...this.state} />

            {/* <Thermos {...coffee} className="neumorphism-card"/> */}

            <CoffeeInfo {...this.state} />

            <CoffeeButton />

            <CoffeeButton litersToBrew="1.1" onClick={this.handleOnClick} />

            <CoffeeButton litersToBrew="0.5" onClick={this.handleOnClick} />

            <CoffeeButton litersToBrew="3.1" onClick={this.handleOnClick} />
          </div>

          <span>This is Thermos and CoffeeInfo</span>
          <section id="top-container" className="container neumorphism-card">
            <Thermos {...this.state} />
            <CoffeeInfo {...this.state} />
          </section>

          <span>This is Thermos and CoffeeButtons (individual components)</span>
          <section
            id="prepare-coffee-container"
            className="container neumorphism-card"
          >
            <Thermos {...this.state} />

            <div className="flex-columns">
              <CoffeeButton litersToBrew="1.1" onClick={this.handleOnClick} />

              <CoffeeButton litersToBrew="0.5" onClick={this.handleOnClick} />

              <CoffeeButton litersToBrew="3.1" onClick={this.handleOnClick} />
              <CoffeeRecipe />
            </div>
          </section>

          <span>
            This is CoffeeControl (composition: Thermos and CoffeeButton(s)))
          </span>
          <section>
            <CoffeeControl {...this.state} onClick={this.handleOnClick} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
