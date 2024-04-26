import React from "react";

function ContactLastMessage(props) {
  return (
    <div className="contactText">
      <p>
        {props.status === "online" ? (
          <>
            <i className="fa fa-circle online mr-2"></i>
            <span>Online</span>
          </>
        ) : (
          <>
            <i className="fa fa-circle offline mr-2"></i>
            <span>Offline</span>
          </>
        )}
      </p>
    </div>
  );
}

export default ContactLastMessage;
