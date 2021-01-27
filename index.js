
var submitButton = document.getElementById("submitButton");
var idea = document.getElementById("idea");

function submit(){

    var ideaRef = firebase.database().ref("Ideas/");
    var ideaVal = idea.value;
    ideaRef.push().set(ideaVal);

}


function pullIdea(){


    var ideaRef = firebase.database().ref("Ideas/").once('value',
    function(snapshot) {
        snapshot.forEach(function(childSnapShot){
            var childKey = childSnapShot.key;
            var childData = childSnapShot.val();
            console.log(childData);
        });
    });
    
}
