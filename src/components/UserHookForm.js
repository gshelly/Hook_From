import React, { useState} from 'react';
import '../App.css'

const UserForm = (props) => {
   
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cwd, setCwd] = useState("");

    return (
        <form>
            <div className = "Main-content">
                <label> First Name </label>
                <input type= "text" onChange= { (e) => setFirstName(e.target.value)} />
            </div>

            <div className = "Main-content">
                <label> Last Name </label>
                <input type= "text" onChange= { (e) => setLastName(e.target.value)} />
            </div>

            <div className = "Main-content">
                <label> Email </label>
                <input type= "text" onChange= { (e) => setEmail(e.target.value)} />
            </div>

            <div className = "Main-content">
                <label> Password  </label>
                <input type= "password" onChange= { (e) => setPassword(e.target.value)} />
            </div>

            <div className = "Main-content">
                <label> Confirm Password </label>
                <input type= "password" onChange= { (e) => setCwd(e.target.value)} />
            </div>
            <div id= "output">
                <h3> Your Form Data</h3>
                <p>First Name <span >{ firstName } </span></p>
                <p>Last Name  <span>{ lastName } </span></p>
                <p>Email  <span>{ email } </span></p>
                <p>Password  <span>{ password }</span></p>
                <p>Confirm Password  <span>{ cwd }</span></p>
            </div>
        </form>
    )
}

export default UserForm;