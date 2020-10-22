import React from "react";
import "./css/main.css";
import { messages } from "./data";
import MessageHistory from "./components/messageHistory/MessageHistory";

function App() {
  return (
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <MessageHistory list={messages} />
        </div>
      </div>
    </div>
  );
}

export default App;
