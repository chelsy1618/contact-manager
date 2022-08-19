import React from "react";
import { Button } from "semantic-ui-react";
import {addContactHandler} from '../App'
class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    }
    
    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" && this.state.email===""){
            alert("All the fields are mandatory! ");
            return;
        }
        this.props.addContactHandler(this.state)
        this.setState({name: "",email: ""})
    } 
      
    render() {
        return (
            <div className="">
                <h2 className="header2">Add Contact</h2>
                <form className="" onSubmit={this.add}>
                    <div className="">
                        <label className="font-size">Name</label>
                        <input
                         type="text"
                         name="name"
                         placeholder="Name" 
                         value={this.state.name}
                         onChange={(e)=> this.setState({name:e.target.value})} />
                    </div>
                    <div className="">
                        <label className="font-size">Email</label>
                        <input  
                          type="text"
                          name="email"
                          placeholder="Email" 
                          value={this.state.email}
                          onChange={(e)=> this.setState({email:e.target.value})}
                          />
                    </div>
                    <Button className="ui button blue space ">Add</Button>
                </form>
            </div>
        )
    }
}

export default AddContact;