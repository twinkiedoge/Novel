$('textarea').on('input', function () {
    this.style.height = 'auto';             
    this.style.height = (this.scrollHeight) + 'px';
});

var submitButton = document.getElementById("submitButton");
var idea = document.getElementById("idea");
var heading = document.querySelector(".Heading");

function submit(){

    var ideaRef = firebase.database().ref("Ideas/");
    var ideaVal = idea.value;
    ideaRef.push().set(ideaVal);

    idea.value = "";
}
