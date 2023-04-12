import Split from "react-split";
import React from "react";
import {Panel1, Panel2, Panel3, Panel4} from "@/pages/dashboard/panels/index.js";

function MainPanel() {
  return (
    <Split
      style={{height: "calc(100vh - 5rem)"}}
      className="d-flex flex-column"
      direction="vertical"
    >
      <Split
        className="d-flex"
        direction="horizontal"
      >
        <Panel1/>
        <Panel2/>
      </Split>
      <Split
        className="d-flex"
        direction="horizontal"
      >
        <Panel3/>
        <Panel4/>
      </Split>
    </Split>
  );
}

export default MainPanel;
