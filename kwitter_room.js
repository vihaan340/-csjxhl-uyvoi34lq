// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyABrs-ES2IlCrhJ2IjBBhv8YC-WXWUZhRY",
      authDomain: "kwiter-8ca9d.firebaseapp.com",
      databaseURL: "https://kwiter-8ca9d-default-rtdb.firebaseio.com",
      projectId: "kwiter-8ca9d",
      storageBucket: "kwiter-8ca9d.appspot.com",
      messagingSenderId: "456944162524",
      appId: "1:456944162524:web:c0c06db7c2ceab7076c619"
    };
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name"); 
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
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
   localStorage.removeItem("room_name");
      window.location = "index.html";
}


