
var submitButton = document.getElementById("submitButton");
var idea = document.getElementById("idea");

function submit(){

    var ideaRef = firebase.database().ref("Ideas/");
    var ideaVal = idea.value;
    ideaRef.push().set(ideaVal);

}
