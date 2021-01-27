
var submitButton = document.getElementById("submitButton");
var idea = document.getElementById("idea");

function submit(){

  var rootRef = firebase.database().ref();

  var ideaVal = idea.value;

  rootRef.push().set(ideaVal);
  window.alert("FB");
}
