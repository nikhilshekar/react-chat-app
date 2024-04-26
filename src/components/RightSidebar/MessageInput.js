import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
function MessageInput(props) {
  const { newMessageHandler } = props;
  const [message, setMessage] = useState("");
  useEffect(() => {
    // reset input value when contact component changes
    setMessage("");
  }, [setMessage, props]);
  let handleInputChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };
  let handleSubmit = () => {
    if (message) {
      newMessageHandler(message);
    } else {
      alert("Type some message text before submitting");
    }
    setMessage("");
    // scroll to the bottom
  };
  return (
    <>
      <Row className="message-input mb-4 ml-4">
        <Col xs={5} lg={5} className="ml-5">
          <div class="input-group mb-0 ml-5">
            <input
              type="text"
              value={message}
              onChange={handleInputChange}
              class="form-control"
              placeholder="Enter text here..."
            />
          </div>
        </Col>
        <Col xs={3} lg={4} className="ml-5">
          <button
            className="send-button btn btn-primary"
            onClick={handleSubmit}
          >
            <i class="fa-solid fa-paper-plane"></i>
          </button>
        </Col>
      </Row>
    </>
  );
}

export default MessageInput;
