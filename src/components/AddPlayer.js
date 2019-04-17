import React, { Component } from "react";
import { MdPersonAdd } from "react-icons/md";

class AddPlayer extends Component {
  constructor() {
    super();
    this.state = {
      playerName: "",
      agent: "",
      birthday: "",
      scoutingReport: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(event) {
    event.preventDefault();
    let temp = {
      playerName: this.state.playerName,
      agent: this.state.agent,
      birthday: this.state.birthday,
      scoutingReport: this.state.scoutingReport
    };

    this.props.addPlayer(temp);

    this.setState({
      playerName: "",
      agent: "",
      birthday: "",
      scoutingReport: ""
    });

    this.props.toggleForm();
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div
        className={
          "card textcenter mt-3 " + (this.props.formDisplay ? "" : "add-player")
        }
      >
        <div
          className="player-addheading card-header bg-success text-white"
          onClick={this.props.toggleForm}
        >
          <MdPersonAdd /> Add A Player
        </div>

        <div className="card-body bg-success text-white">
          <form id="playerForm" noValidate onSubmit={this.handleAdd}>
            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="playerName"
                readOnly
              >
                Player Name
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="playerName"
                  placeholder="Player's Name"
                  value={this.state.playerName}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="agent"
              >
                Agent
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="agent"
                  placeholder="Agent's Name"
                  value={this.state.agent}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="birthday"
              >
                Birthday
              </label>
              <div className="col-md-4">
                <input
                  type="date"
                  className="form-control"
                  name="birthday"
                  id="birthday"
                  value={this.state.birthday}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 text-md-right"
                htmlFor="scoutingReport"
              >
                Scouting Report
              </label>
              <div className="col-md-10">
                <textarea
                  className="form-control"
                  rows="3"
                  cols="20"
                  name="scoutingReport"
                  id="scoutingReport"
                  placeholder="Scouting Summary"
                  value={this.state.scoutingReport}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row mb-0">
              <div className="offset-md-2 col-md-10">
                <button
                  type="submit"
                  className="btn btn-primary d-block ml-auto"
                >
                  Add Player
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPlayer;
