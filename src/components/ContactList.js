import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import {Button }from 'semantic-ui-react'
const ContactList = (props) =>{
    console.log(props);
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }
    
    const contacts=[{
        id:'1',
        name:'gunjan',
        email:'gunjan@appentus.me'
    },];
    const renderContactList = props.contacts.map((contact) => {
        return(
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}></ContactCard>
        );
    });
    console.log(renderContactList)
    return(
        <div className="main d-flex">
            <h2>
                Contact list
                </h2>
                <Button className="ui button blue  right">Add Contact</Button>
                
            <div className="ui celled list ">
             {renderContactList} 
            </div>
        </div>
    );
};

export default ContactList;