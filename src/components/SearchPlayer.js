import React, { Component } from "react";

class SearchPlayer extends Component {
  render() {
    return (
      <div className="search-player row justify-content-center my-4">
        <div className="col-md-6">
          <div className="input-group">
            <input
              id="SearchPlayer"
              type="text"
              className="form-control"
              aria-label="Search Players"
              onChange = {event => this.props.searchPlayer(event.target.value)}
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by: <span className="caret" />
              </button>

              <div className="sort-menu dropdown-menu dropdown-menu-right">
                <button className= {
                    "sort-by dropdown-item" + 
                    (this.props.orderBy === 'playerName' ? 'active' : '')
                } 
                onClick = {event => this.props.selectOrder('playerName', this.props.orderDirection)}
                href="#">
                  Player Name
                </button>
                <button className= {
                    'sort-by dropdown-item' + 
                    (this.props.orderBy === 'birthday' ? 'active' : '')
                }
                onClick = { event => this.props.selectOrder('birthday', this.props.orderDirection)}
                href="#">
                  Birthday
                </button>
                <button className= {
                    "sort-by dropdown-item" + 
                    (this.props.orderBy === 'agent' ? 'active' : '')
                } 
                onClick = {event => this.props.selectOrder('agent', this.props.orderDirection)}
                href="#">
                  Agent
                </button>
                <div role="separator" className="dropdown-divider" />
                <button className= {
                    "sort-by dropdown-item" + 
                    (this.props.orderDirection === 'ascending' ? 'active' : '')
                } 
                onClick = {event => this.props.selectOrder(this.props.orderBy, 'ascending')}
                href="#">
                  Ascending
                </button>
                <button className= {
                    "sort-by dropdown-item" + 
                    (this.props.orderDirection === 'descending' ? 'active' : '')
                } 
                onClick = {event => this.props.selectOrder(this.props.orderBy, 'descending')}
                href="#">
                  Descending
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPlayer;
