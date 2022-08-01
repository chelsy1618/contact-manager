import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactCard from "./components/ContactCard";
import ContactList from "./components/ContactList";
function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([])
  const addContactHandler = (contact) => {
    console.log("contact ", contact)
    setContacts([...contacts, contact])
  };
  

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY ));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  return (
    <div className=" ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />

    </div>
  );
}

export default App;
