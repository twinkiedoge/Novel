
var submitButton = document.getElementById("submitButton");
var idea = document.getElementById("idea");
var description = document.getElementById("description");

function submit(){

    var ideaRef = firebase.database().ref("Ideas/");
    var ideaVal = idea.value;
    var descriptionVal = description.value;
    ideaRef.push().set({
        description: descriptionVal,
        idea: ideaVal
    });

    idea.value = "";
    idea.description = "";
}
