import React from "react";


const ContactCard = (props) =>{
    const {id, name, email} = props.contact;
    return(
        <div key={id} className="item" style={{display:'flex'}}>
        <div className="content ">
           <div className="header">{name}</div>
           <div>{email}</div>
        </div>
        <div  >
        <i className="trash alternate outline icon" style={{color:'red',marginTop:'7px'}}></i>
        </div>
        </div> 
    )
}

export default ContactCard;