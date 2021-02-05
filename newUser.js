
function newUser(){
    var userEmail = document.getElementById("userEmail").value;
    var password = document.getElementById("userPassword").value;
    console.log(userEmail);

    firebase.auth().createUserWithEmailAndPassword(userEmail, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}
