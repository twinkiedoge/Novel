
var submitButton = document.getElementById("submitButton");
var idea = document.getElementById("idea");

function submit(){
  var rootRef = firebase.database().ref();
  rootRef.child("text").set("weiner");
  window.alert("FB");
}
