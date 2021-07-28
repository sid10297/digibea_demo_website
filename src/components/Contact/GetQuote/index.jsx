import React from "react";
import { Form, Button } from "react-bootstrap";
import { Strings } from "../../../constants";
import "./index.css";

const GetQuote = () => {
  return (
    <div className={"form-container"}>
      <div className="form">
        <h3 className="text-center py-3" style={{ color: "var(--text)" }}>
          Contact us
        </h3>
        <Form className={"formStyle"}>
          <Form.Group controlId="contact_name" className="my-3">
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          <Form.Group controlId="contact_email" className="my-3">
            <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>
          <Form.Group controlId="contact_message">
            <Form.Control
              as="textarea"
              style={{ resize: "none" }}
              placeholder={Strings.contactUsMessage}
              rows={4}
            />
          </Form.Group>
          <div className="text-center">
            <Button style={{ width: "100%" }}>Send</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default GetQuote;
