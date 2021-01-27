
var submitButton = document.getElementById("submitButton");
var idea = document.getElementById("idea");

function submit(){
<<<<<<< HEAD
  var rootRef = firebase.database().ref();
  rootRef.child("text").set("weiner");
=======

  var rootRef = firebase.database().ref();

  var ideaVal = idea.value;

  rootRef.push().set(ideaVal);
>>>>>>> d0cd5ad1299242789a26e145bbb6522b6578d1da
  window.alert("FB");
}
