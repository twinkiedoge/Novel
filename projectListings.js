

function pullIdea(){
    console.log("hi");
    var ideaRef = firebase.database().ref("Ideas/").once('value',
    function(snapshot) {
        snapshot.forEach(function(childSnapShot){
            var childKey = childSnapShot.key;
            var childData = childSnapShot.val();
            console.log(childData);
        });
    });
}
