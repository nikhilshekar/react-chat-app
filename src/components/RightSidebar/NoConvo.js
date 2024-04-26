import React from "react";
import "../stylesheets/rightSidebar.css";
import logo from "../../images/messenger.png";
function NoConvo() {
  return (
    <div className="no-chat-background">
      <h2
        style={{ marginTop: "15rem", textAlign: "center", fontWeight: "700" }}
      >
        <span class="badge bg-primary " style={{ padding: "25px" }}>
          Welcome to the React Chat App!
        </span>
        <div
          style={{
            width: "160px",
            height: "160px",
            background: "url(" + logo + ")",
            margin: "auto",
            marginTop: "5rem",
            backgroundSize: "cover",
          }}
          className="messenger-logo"
          //src={logo}
        ></div>
      </h2>
    </div>
  );
}

export default NoConvo;
