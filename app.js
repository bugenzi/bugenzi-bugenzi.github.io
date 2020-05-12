var firebaseConfig = {
    apiKey: "AIzaSyCrGZhhojgJavxgLcDHqaNCFbrFFxBXDHM",
    authDomain: "job-messages.firebaseapp.com",
    databaseURL: "https://job-messages.firebaseio.com",
    projectId: "job-messages",
    storageBucket: "job-messages.appspot.com",
    messagingSenderId: "105143785538",
    appId: "1:105143785538:web:ef91aa93bd0b1683ff35db",
    measurementId: "G-GN3L12TWQM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var messagesRef = firebase.database().ref('messages');

//Refrenc message collection

let messageRef = firebase.database().ref('messages');


//Creating a listiner to the form 
document.getElementById('submitButton').addEventListener('click', submitForm=(e)=>{
 

    
    var name = getInputValue("name");
    var message = getInputValue("message");
    var email = getInputValue("email");

    saveMessage(name,email,message)
    
});
// gets the values from the from 
function getInputValue(id){

    return document.getElementById(id).value; 
}

function saveMessage (name,email,message){
    let newMessageRef= messageRef.push();
    newMessageRef.set({
        name:name,
        email:email,
        message:message
    })
}

