import React from "react";
import ContactCard from "./ContactCard"
const ContactList = (props) =>{
    console.log(props);
    const renderContactList = props.contacts.map((contact, index) => {
        return(
            <ContactCard contact={contact}></ContactCard>
        );
    });
    console.log(renderContactList)
    return(
        <div className="ui celled list ">
             {renderContactList} 
        </div>
    );
};

export default ContactList;