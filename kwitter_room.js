
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
  apiKey: "AIzaSyDivDdGMJ5doHFWm84AIzuHXtUU1gLIXjw",
  authDomain: "digit-849f0.firebaseapp.com",
  databaseURL: "https://digit-849f0-default-rtdb.firebaseio.com",
  projectId: "digit-849f0",
  storageBucket: "digit-849f0.appspot.com",
  messagingSenderId: "682783629642",
  appId: "1:682783629642:web:51391acf9e2e1882bde1b3",
  measurementId: "G-DEMYMX27QK"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome/Velkommen " + user_name + "!";

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
    });
  
    localStorage.setItem("room_name", room_name);
  
  
    window.location = "kwitter_page.html"
  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name")
     window.location = "index.html"


}


