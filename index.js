
var submitButton = document.getElementById("submitButton");
var idea = document.getElementById("idea");
var subject = document.getElementById("subject");

function submit(){

    var ideaRef = firebase.database().ref("Ideas/");
    var ideaVal = idea.value;
    var subjectVal = subject.value;
    ideaRef.push().set({
        subject: subjectVal,
        idea: ideaVal
    });

    idea.value = "";
}
