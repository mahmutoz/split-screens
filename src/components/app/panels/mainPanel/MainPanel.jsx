import Split from "react-split";
import React from "react";
import {Panel1, Panel2, Panel3, Panel4} from "@/components/app/panels/index.js";
import {useDispatch, useSelector} from "react-redux";
import {setScreenSize} from "@/stores/reducers/screenSize.js";

function MainPanel() {
  const dispatch = useDispatch();
  const {horizontalScreen, topVerticalScreen, bottomVerticalScreen} = useSelector((state) => state.screenSizeReducer);

  const handleSplit = (value, type) => {
    dispatch(setScreenSize({type, value}))
  }

  return (
    <Split
      style={{height: "calc(100vh - 5rem)"}}
      className="d-flex flex-column"
      direction="vertical"
      sizes={horizontalScreen}
      onDragEnd={(event) => handleSplit(event, "horizontalScreen")}
    >
      <Split
        className="d-flex"
        direction="horizontal"
        sizes={topVerticalScreen}
        onDragEnd={(event) => handleSplit(event, "topVerticalScreen")}
      >
        <Panel1/>
        <Panel2/>
      </Split>
      <Split
        className="d-flex"
        direction="horizontal"
        sizes={bottomVerticalScreen}
        onDragEnd={(event) => handleSplit(event, "bottomVerticalScreen")}
      >
        <Panel3/>
        <Panel4/>
      </Split>
    </Split>
  );
}

export default MainPanel;
