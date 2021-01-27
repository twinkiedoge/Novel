
var submitButton = document.getElementById("submitButton");
var idea = document.getElementById("idea");
var heading = document.querySelector(".Heading");

function submit(){

    var ideaRef = firebase.database().ref("Ideas/");
    var ideaVal = idea.value;
    ideaRef.push().set(ideaVal);

    ideaRef.push().set(ideaVal);
    
    idea.value = "";
}
