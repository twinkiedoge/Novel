
function pullIdea(){

    var tableData = '';
    var ideaRef = firebase.database().ref("Ideas/").once('value',
    function(snapshot) {
        snapshot.forEach(function(childSnapShot){
            var childKey = childSnapShot.key;
            var childData = childSnapShot.val();
            
            tableData += '<div class="container">';
            tableData += '<button type="button" class="collapsible">' + childData.idea + '</button>';
            tableData += '<div class="content">' + '<p>' + childData.description + '</p>' + '</div>';
            tableData += '<button type="button" onclick="upvote(\''+ childKey +'\')" class="upvote">' + "up" + "</button>";
            tableData += '<button type="button" onclick="downvote(\''+ childKey +'\')" class="downvote">' + "down" + "</button>";
            tableData += '</div>';
        });
        $('#firetable').append(tableData);
        var tableData = '';
        collapsible();
    });
}

//for collapsible buttons
function collapsible(){
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}


function upvote(childKey){

    var postRef = firebase.database().ref("Ideas/").child(childKey);

    postRef.once('value', function(childSnapShot){
        var childData = childSnapShot.val();
        var upvotes = childData.upvotes + 1;

        postRef.update({
            "upvotes": upvotes
        });
    });
}


function downvote(childKey){

    var postRef = firebase.database().ref("Ideas/").child(childKey);

    postRef.once('value', function(childSnapShot){
        var childData = childSnapShot.val();
        var downvotes = childData.downvotes + 1;

        postRef.update({
            "downvotes": downvotes
        });
    });
}
