
function login(){
    var userEmail = document.getElementById("userEmail").value;
    var password = document.getElementById("userPassword").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("ERROR: " + errorMessage);
  });
  console.log("logged in");
}
