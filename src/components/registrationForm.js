import React, {useState,setState} from 'react';
import './style.css'
import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";
function RegistrationForm() {
    
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [mobile, setMobile] = useState(null);
    const [age, setAge] = useState(null);
    const [time, setTime] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);


    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "mobile"){
            setMobile(value);
        }
        if(id === "age"){
            setAge(value);
        }
        if(id === "time"){
            setTime(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }

    }

    const handleSubmit  = () => {
        console.log(firstName,lastName,mobile,age,time,email,password);
    }

    return(
        <div className="form">
            <div className="form-body">
                <div className="firstname">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div className="mobile">
                    <label className="form__label" for="mobile">Mobile </label>
                    <input type="text"  id="mobile" value={mobile} onChange = {(e) => handleInputChange(e)} placeholder="Mobile"/>
                </div>
                <div className="age">
                    <label className="form__label" for="age">Age </label>
                    <input type="number" id="age" min="18" max="65" value={age} onChange = {(e) => handleInputChange(e)} placeholder="Age"/>
                </div>
                <div className="time">
                    <label className="form__label" for="time">Time </label>
                    <select name="time" id="time" value={time} onChange = {(e) => handleInputChange(e)}>
                        <option value="option 1">6-7 AM</option>
                        <option value="option 2">7-8 AM</option>
                        <option value="option 3">8-9 AM</option>
                        <option value="option 4">5-6 PM</option>
                    </select>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password" id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </div>
       
    )       
}

export default RegistrationForm