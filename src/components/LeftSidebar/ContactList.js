import React from "react";
import ContactTab from "./ContactTab";

function ContactList({ contacts }) {
  // need contact tab component
  return (
    <>
      <div style={styles.contactList} className="contactscreen">
        {contacts.map((contact, index) => (
          <ContactTab contact={contact} key={index} />
        ))}
      </div>
    </>
  );
}
const styles = {
  contactList: {
    height: "100vh",
    zIndex: "2",
    backgroundColor: "#fff",
  },
};
export default ContactList;