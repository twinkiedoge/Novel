
var submitButton = document.getElementById("submitButton");
var idea = document.getElementById("idea");
var description = document.getElementById("description");

function submit(){

    var ideaRef = firebase.database().ref("Ideas/");
    var ideaVal = idea.value;
    var descriptionVal = description.value;
    var upvotes = 0;

    ideaRef.push().set({
        idea: ideaVal,
        description: descriptionVal,
        upvotes: upvotes
    });

    idea.value = "";
    description.value = "";
}
