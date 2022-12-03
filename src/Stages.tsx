import React, { Component } from "react";

import Stage from "./Stage";

export class Stages extends Component<any, any> {
  render() {
    const { stages, name } = this.props;

    return (
      <div>
        <ul className="stages">
          <li style={{ paddingBottom: "10px" }}>
            {" "}
            <b>{name}</b>{" "}
          </li>
          {stages
            .filter((child: any) => child.type === "command")
            .map((child: any, i: number) => {
              return (
                <li key={`${name}-${i}`}>
                  <Stage {...child} />
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}
