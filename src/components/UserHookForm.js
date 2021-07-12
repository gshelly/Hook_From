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
                <p>
                    <label>First Name</label> { firstName } 
                </p>
                <p>
                    <label> Last Name  </label> { lastName } 
                </p>
                <p> 
                    <label>Email</label> { email } 
                </p>
                <p> 
                    <label>Password </label> { password }
                </p>
                <p>
                    <label>Confirm Password</label> { cwd }
                </p>
            </div>
        </form>
    )
}

export default UserForm;