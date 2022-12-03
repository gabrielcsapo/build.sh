import React, { Component } from "react";
import { Icon } from "./Icon";

import { ms } from "./Utils";

interface StageProps {
  id: number;
  command: string;
  time: number;
  output: any[];
  state: string;
}

interface StageState {
  selected: boolean;
  showTimestamp: boolean;
}

class Stage extends Component<StageProps, StageState> {
  constructor(props: StageProps) {
    super(props);
    this.state = {
      selected: false,
      showTimestamp: false,
    };
  }
  toggle() {
    const { selected } = this.state;

    this.setState({
      selected: !selected,
      showTimestamp: true,
    });
  }
  toggleTimestamp(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      showTimestamp: e.target.checked,
    });
  }
  render() {
    const { id, command, time, output, state } = this.props;
    const { selected, showTimestamp } = this.state;

    return (
      <div>
        <div
          className="stage"
          style={{ borderBottom: selected ? 0 : "1px solid #dedede" }}
          onClick={this.toggle.bind(this)}
        >
          <span className={`stage-icon icon-${state}`}>
            <svg width="16" height="30">
              <g x="0" y="0" transform="translate(8, 14)">
                <Icon status={state} />
              </g>
            </svg>
          </span>

          <span className="stage-title">
            {selected ? "▿" : "▹"} {command}
          </span>

          <div className="stage-time"> {ms(time || 0)} </div>
        </div>
        {selected ? (
          <pre>
            <div style={{ float: "right" }}>
              <input
                type="checkbox"
                id={`${id}-showTimestamp`}
                checked={!!showTimestamp}
                style={{ display: "inline-block", width: "auto" }}
                onChange={this.toggleTimestamp.bind(this)}
              />
              &nbsp;
              <label
                htmlFor={`${id}-showTimestamp`}
                style={{ display: "inline-block" }}
              >
                Show Timestamp
              </label>
            </div>
            <table style={{ width: "100%" }}>
              {output.map((l) => {
                const date = new Date(l.date);

                return (
                  <tr>
                    {showTimestamp ? (
                      <td
                        style={{
                          borderRight: "1px solid #dedede",
                          paddingRight: "2px",
                          width: "100px",
                        }}
                      >
                        <b>
                          {date.getHours()}:{date.getMinutes()}:
                          {date.getSeconds()}:{date.getMilliseconds()}
                        </b>
                      </td>
                    ) : (
                      ""
                    )}
                    <td style={{ paddingLeft: showTimestamp ? "3px" : "0px" }}>
                      <span>{l.content}</span>
                    </td>
                  </tr>
                );
              })}
            </table>
          </pre>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Stage;
