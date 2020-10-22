import React from "react";
import Message from "../messageItems/Message";
import Response from "../messageItems/Response";
import Typing from "../messageItems/Typing";

const MessageHistory = ({ list }) => {
  if (!list.length) {
    return null;
  }

  return (
    <ul>
      {list.map(({ id, from: { name }, type, time, text }) => {
        return type === "message" ? (
          <Message key={id} from={name} time={time} text={text} />
        ) : type === "response" ? (
          <Response key={id} from={name} time={time} text={text} />
        ) : (
          <Typing key={id} />
        );
      })}
    </ul>
  );
};

MessageHistory.defaultPropTypes = {
  list: [],
};

export default MessageHistory;
