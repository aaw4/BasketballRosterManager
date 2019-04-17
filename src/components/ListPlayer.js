import React, { Component } from "react";
import { IoIosTrash } from "react-icons/io";

class ListPlayer extends Component {
  render() {
    return (
      <div className="roster-list item-list mb-3">
        {this.props.roster.map(item => (
          <div className="player-item col media py-3" key={item.playerID}>
            <div className="mr-3">
              <button
                className="player-delete btn btn-sm btn-danger"
                onClick={() => this.props.deletePlayer(item)}
              >
                <IoIosTrash />
              </button>
            </div>

            <div className="player-info media-body">
              <div className="player-head d-flex">
                <span
                  className="player-name"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={event =>
                    this.props.modify(
                      "playerName",
                      event.target.innerText,
                      item.playerID
                    )
                  }
                >
                  {item.playerName}
                </span>
                <span className="birthday ml-auto">{item.birthday}</span>
              </div>

              <div className="agent-name">
                <span className="label-item">Agent: </span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={event =>
                    this.props.modify(
                      "agent",
                      event.target.innerText,
                      item.playerID
                    )
                  }
                >
                  {item.agent}
                </span>
              </div>
              <div
                className="scouting-report"
                contentEditable
                suppressContentEditableWarning
                onBlur={event =>
                  this.props.modify(
                    "scoutingReport",
                    event.target.innerText,
                    item.playerID
                  )
                }
              >
                {item.scoutingReport}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ListPlayer;
