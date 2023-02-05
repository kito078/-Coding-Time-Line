import React from "react";
import TimeLineList from "../timelinelist/TimeLineList";

function TimeLineItem(props) {
  let content = <p className="text-center">there are no items at the moment</p>;

  if (props.items.length === 0) {
    return content;
  }

  return (
    <div>
      {props.items.map((item) => {
        return (
          <TimeLineList key={item.id} id={item.id} onDelete={props.delete}>
            {item.text}
          </TimeLineList>
        );
      })}
    </div>
  );
}

export default TimeLineItem;
