import React, { Component } from "react";
import "../css/App.css";

import AddPlayer from "./AddPlayer";
import SearchPlayer from "./SearchPlayer";
import ListPlayer from "./ListPlayer";

import { without } from "lodash";
import { findIndex } from "lodash";

class App extends Component {
  constructor() {
    super();
    this.state = {
      myRoster: [],
      orderBy: "playerName",
      orderDirection: "ascending",
      queryText: "",
      formDisplay: false,
      lastIndex: 0
    };
    this.deletePlayer = this.deletePlayer.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.selectOrder = this.selectOrder.bind(this);
    this.searchPlayer = this.searchPlayer.bind(this);
    this.modify = this.modify.bind(this);
  }

  modify(name, value, ID) {
    let temp = this.state.myRoster;
    let currPlayerID = findIndex(this.state.myRoster, {
      playerID: ID
    });
    temp[currPlayerID][name] = value;
    this.setState({
      myRoster: temp
    });
  }

  searchPlayer(queryText) {
    this.setState({
      queryText: queryText
    });
  }

  selectOrder(order, direction) {
    this.setState({
      orderBy: order,
      orderDirection: direction
    });
  }

  addPlayer(player) {
    let temp = this.state.myRoster;
    player.playerID = this.state.lastIndex;
    temp.unshift(player);
    this.setState({
      myRoster: temp,
      lastIndex: this.state.lastIndex + 1
    });
  }

  toggleForm() {
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }

  deletePlayer(player) {
    let temp = this.state.myRoster;
    temp = without(temp, player);

    this.setState({
      myRoster: temp
    });
  }

  componentDidMount() {
    fetch("./data.json")
      .then(response => response.json())
      .then(result => {
        const player = result.map(item => {
          item.playerID = this.state.lastIndex;
          this.setState({ lastIndex: this.state.lastIndex + 1 });
          return item;
        });
        this.setState({
          myRoster: player
        });
      });
  }

  render() {
    let tempOrder;
    let filteredRoster = this.state.myRoster;
    this.state.orderDirection === "ascending"
      ? (tempOrder = 1)
      : (tempOrder = -1);
    filteredRoster = filteredRoster
      .sort((a, b) => {
        return a[this.state.orderBy].toLowerCase() <
          b[this.state.orderBy].toLowerCase()
          ? tempOrder * -1
          : tempOrder * 1;
      })
      .filter(item => {
        return (
          item["playerName"]
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase()) ||
          item["birthday"]
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase()) ||
          item["agent"]
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase()) ||
          item["scoutingReport"]
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase())
        );
      });

    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <div className="App-component">
                  <div className="App-component2">
                    <AddPlayer
                      formDisplay={this.state.formDisplay}
                      toggleForm={this.toggleForm}
                      addPlayer={this.addPlayer}
                    />
                    <SearchPlayer
                      orderBy={this.state.orderBy}
                      orderDirection={this.state.orderDirection}
                      selectOrder={this.selectOrder}
                      searchPlayer={this.searchPlayer}
                    />
                    <ListPlayer
                      roster={filteredRoster}
                      deletePlayer={this.deletePlayer}
                      modify={this.modify}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
