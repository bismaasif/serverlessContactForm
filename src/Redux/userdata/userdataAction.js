import { Set_user } from "./userdataContants";
import firebase from 'firebase';

export var datasubmission=({name,email,phone,mess})=> async(dispatch)=>{
    try {
    //     //create user on firebase auth section
    //  var {user:{uid}}= await auth.createUserWithEmailAndPassword(Email,Password)
    
        //save user's info to firestore
             var userinfo={
                 name,
            email,
            phone,
            
            mess,

            
         }
        // console.log(userinfo)
        var firestore=firebase.firestore();
        await firestore.collection("users").doc().set(userinfo)
    
        //console.log(user)
        //settting up redux state
        var userforstate={
            name,
            email,
            phone,
            mess
        }
      dispatch(Set_user(userforstate))
    } catch (error) {
        console.log(error.message)
    }
    }