

$(document).ready(function(){    
    var firebaseConfig = {
        apiKey: "AIzaSyCCDRI_PE-TCd6EKExKNbmT2TeJWx6LB9g",
    authDomain: "products-c0d9e.firebaseapp.com",
    projectId: "products-c0d9e",
    storageBucket: "products-c0d9e.appspot.com",
    messagingSenderId: "1016841690489",
    appId: "1:1016841690489:web:34b6591469c0b696c4a3a8"
      };
      // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();
   
    $("#login-form").submit(function(e) {
        e.preventDefault();
    });

    $('#submit_data').click(function() {
      login();
    });

    $('#back_button').click(function()
    {
        logout();
    });

   

  });
  
function login(){
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(email)
    if(email === "admin@gmail.com")
    {
        window.location = 'transport_portal.html';
        
    }
    
}

function logout()
{
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
    }).catch(function(error) {
    // An error happened.
    });
}
