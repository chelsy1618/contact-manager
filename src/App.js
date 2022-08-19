import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactCard from "./components/ContactCard";
import ContactList from "./components/ContactList";
import { v4 } from "uuid";
import { Link } from 'react-router-dom'

function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([])
  const addContactHandler = (contact) => {
    const newContactsList = [...contacts, { id: v4(), ...contact }];
    setContacts(newContactsList);
    localStorage.setItem('contacts', JSON.stringify(newContactsList));
  };

  const removeContactHandler = (id) => {
    const newContactsList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactsList);
    localStorage.setItem('contacts', JSON.stringify(newContactsList));
  }
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  return (
    <div className=" ui container">

      <Header />
      <Router><Routes>
      {/* <Route path="./" component={ContactList} >
        <ContactList />
      </Route>
      <Route path="/add" component={AddContact}>
        <AddContact/>
      </Route>
      */}

      <Route
        path="/add"
        element={
          <AddContact addContactHandler={addContactHandler} />
        } />
      <Route
        path="/"
        element={
          <ContactList contacts={contacts} getContactId={removeContactHandler} />
        } />



</Routes></Router>

    </div>
  );
}

export default App;

