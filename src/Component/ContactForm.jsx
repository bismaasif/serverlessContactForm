import { useState } from 'react';
import './ContactForm.css';
import './../Firebase/Firebase.js';
import firebase from 'firebase';
import { connect } from 'react-redux';
import {datasubmission} from './../Redux/userdata/userdataAction'



const ContactForm=({datasubmission})=>{

    var [email,setemail]=useState("");
    var [name,setname]=useState("");
    var [phone,setphone]=useState("");
    var[mess,setmess]=useState("");
    
// var firestore=firebase.firestore()
//     //add collection
//     var data =firestore.collection("form-info")
  
    var submit=(e)=>{
e.preventDefault();
var data1={
    name,
    email,
    phone,
    mess
}
datasubmission(data1)
// console.log(name)
// console.log(email)
// console.log(mess)

// data.doc().set({
//     name :name,
//     email :email,
//     phone: phone,
//     message:mess
// }).then( ()=>{
//     console.log("data saved")
// }).catch(( error)=>{
//     console.log(error)
// })

    }
    return(
        
        <>
       <form id="submit" type="submit" onSubmit={submit}>
        <div class="container">
		<div class="contact-box">
			<div class="left"></div>
			<div class="right">
				<h2>Contact Us</h2>
				<input type="text" id="name" className="field" value={name} onChange={(e)=> {setname(e.target.value)}} type="text" placeholder="Your Name"/>
				<input type="text" id="email" className="field" value={email} onChange={(e)=> {setemail(e.target.value)}} type="email" placeholder="Your Email"/>
				<input type="text" id="phone" className="field" value={phone} onChange={(e)=> {setphone(e.target.value)}} type="text" placeholder="Phone"/>
				<textarea id="message" placeholder="Message" value={mess} type="text" onChange={(e)=> {setmess(e.target.value)}} class="field"></textarea>
				<button className="btn" id="submit" >Submit</button>
			</div>
		</div>
	</div>
    </form>
  
  
        </>

    )

}
var actions={
    datasubmission
}
export default connect(null,actions)( ContactForm);