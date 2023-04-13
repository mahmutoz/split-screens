import React from "react";
import Toolbar from "./Toolbar";
import Table from "@/components/app/panels/panel1/Table.jsx";

function Panel1() {
  return (
    <div className="d-flex flex-column">
      <Toolbar/>
      <Table/>
    </div>
  );
}

export default Panel1;
