
var submitButton = document.getElementById("submitButton");
var idea = document.getElementById("idea");

function submit(){
  window.alert("FB");
  var rootRef = firebase.database().ref();
  rootRef.child("text").set("weiner");

}
