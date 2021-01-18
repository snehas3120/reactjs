$(document).ready(function() {
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
    
    $("#book-form").submit(function(e) {
        e.preventDefault();
    });

    $('#submit').click(function() {
      add_this();
    });
    


});
function add_this()
    {
        var productquantity = document.getElementById("book_code").value;
        var productName = document.getElementById("book_name").value;
        var source = document.getElementById("locationfrom_name").value;
        var destination= document.getElementById("locationto_name").value;
        
        var db = firebase.firestore();
     
        db.collection("movement").doc(productquantity).set({
            productquantity: productquantity,
            productname : productName,
            source:source,
            destination:destination
            
        })
        .then(function() {
            console.log("Document successfully written!");
            window.alert("Successfully transported");
            window.location = 'transport_portal.html';
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }
    