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
    
    //var docRef = db.collection("books");

    // db.collection("books").where("subject", "==", "Computer Science")
    // .get()
    // .then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // })
    // .catch(function(error) {
    //     console.log("Error getting documents: ", error);a    qaz`
    // });

    db.collection("products").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            $('#products').append(
                "<div><h2>"+doc.data().productquantity+  "-"   +doc.data().productname+"</h2>"+
                
                "</div><hr>");
        });
    });

    db.collection("locations").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            var location = [];
            location = doc.data().locationcode;
            locations_set = "<ul>";
            for(var i=0;i<location.length;i++)
            {
                locations_set = locations_set +"<li>"+ location[i] + "</li>" ;
            }
            locations_set = locations_set + "</ul>";
            $('#locations').append(
                "<div><h2>"+ doc.data().locationcode+"</h2>"+
                 "<h3>"+ doc.data().locationname+"</h3>"+
                locations_set+
                "</div><hr>");
        });
    });

    db.collection("movement").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            
            $('#transports').append(
                "<div><h2>"+ doc.data().productquantity+"</h2>"+
                 "<h3>"+ doc.data().productname+"</h3>"+
                 "<h3>"+ doc.data().source+"</h3>"+
                 "<h3>"+ doc.data().destination+"</h3>"+
                "</div><hr>");
        });
    });
  
    $("#Locations_search").submit(function(e) {
        e.preventDefault();
    });
    
    $("#Products_search").submit(function(e) {
        e.preventDefault();
    });

    

    $('#show_products').click(function()
    {
        show_products();
    });
    $('#show_locations').click(function()
    {
        show_locations();
    });
    $('#show_transports').click(function()
    {
        show_transports();
    });

    $('#log_button').click(function()
    {
        logout();
    });
   

});

function show_products()
{
    d1 = document.getElementById("products");
    d2 = document.getElementById("locations");
    d3 = document.getElementById("transports");
    d1.style.display = "block";
    d2.style.display = "none";
    d3.style.display = "none";
    
}

function show_locations()
{
   
    d1 = document.getElementById("products");
    d2 = document.getElementById("locations");
    d3 = document.getElementById("transports");
    d1.style.display = "none";
    d2.style.display = "block";
    d3.style.display = "none";
}
function show_transports()
{
    
    d1 = document.getElementById("products");
    d2 = document.getElementById("locations");
    d3 = document.getElementById("transports");
    d1.style.display = "none";
    d2.style.display = "none";
    d3.style.display = "block";
   
}
function logout()
{
    firebase.auth().signOut().then(function() {
        console.log("logout done");
        window.location = 'login.html';
    }).catch(function(error) {
        console.log("error");
    });
}
