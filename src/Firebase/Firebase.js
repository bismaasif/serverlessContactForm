import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


var firebaseConfig = {
    apiKey: "AIzaSyCvDgcvro3JhrhE5atTRKWZXajlCuCs4vk",
    authDomain: "contact-form-a23e9.firebaseapp.com",
    databaseURL: "https://contact-form-a23e9-default-rtdb.firebaseio.com",
    projectId: "contact-form-a23e9",
    storageBucket: "contact-form-a23e9.appspot.com",
    messagingSenderId: "518906939865",
    appId: "1:518906939865:web:f598d0ae812bba6aab71c8",
    measurementId: "G-CDEY3LGRSQ"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//  var firestore= firebase.firestore()

//   //add collection
//   var data =firestore.collection("form-info")

//   //get data
//   let submitButton= document.getElementById('submit')

//   submitButton.addEventListener("click", (e)=>{
//       e.preventDefault();
//       let name=document.getElementById('name').value
      
//       let email=document.getElementById('email').value
      
//       let phone=document.getElementById('phone').value
      
//       let message=document.getElementById('message').value


//       data.doc().set({
//           name :name,
//           email :email,
//           phone: phone,
//           message:message
//       }).then( ()=>{
//           console.log("data saved")
//       }).catch(( error)=>{
//           console.log(error)
//       })
//   })

export var auth=firebase.auth();
export var firestore=firebase.firestore();
export var Googleauthprovider=new firebase.auth.GoogleAuthProvider();
export var serverTimestamp=()=>firebase.firestore.FieldValue.serverTimestamp();
export var storage=firebase.storage().ref();
export default firebase;
  