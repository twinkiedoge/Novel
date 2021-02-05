
function pullIdea(){
    //main function
    var tableData = '';
    var ideaRef = firebase.database().ref("Ideas/").once('value',
    function(snapshot) {
        snapshot.forEach(function(childSnapShot){
            var childKey = childSnapShot.key;
            var childData = childSnapShot.val();
            var downvotes = childData.downvotes;
            var upvotes = childData.upvotes;
            var total = upvotes - downvotes;

            tableData += '<div class="main-container">';
            tableData += '<div class="idea-container">';
            tableData += '<button type="button" class="collapsible">' + childData.idea + '</button>';
            tableData += '<div class="content">' + '<p>' + childData.description + '</p>' + '</div>';
            tableData += '</div>';
            tableData += '<div class="buttons">';
            tableData += '<button type="button" onclick="upvote(\''+ childKey +'\')" class="upvote">' + "up" + "</button>";
            tableData += '<button type="button" onclick="downvote(\''+ childKey +'\')" class="downvote">' + "down" + "</button>";
            tableData += '</div>';
            tableData += '<div class="circle">';
            tableData += '<div class="counter" id="' + childKey + '">' + total + '</div>';
            tableData += '</div>';
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

/*
upvote function takes the childkey of a specfic idea post as an arguement and
incremements the amount of upvotes by 1 -AB.
*/
function upvote(childKey){

    var postRef = firebase.database().ref("Ideas/").child(childKey);

    postRef.once('value', function(childSnapShot){
        var childData = childSnapShot.val();
        var upvotes = childData.upvotes + 1;
        var downvotes = childData.downvotes;

        postRef.update({
            "upvotes": upvotes
        });
        document.getElementById(childKey).innerHTML = upvotes - downvotes;
    });
}

//Same functionality as upvotes except for downvotes -AB.
function downvote(childKey){

    var postRef = firebase.database().ref("Ideas/").child(childKey);

    postRef.once('value', function(childSnapShot){
        var childData = childSnapShot.val();
        var upvotes = childData.upvotes;
        var downvotes = childData.downvotes + 1;

        postRef.update({
            "downvotes": downvotes
        });
        document.getElementById(childKey).innerHTML = upvotes - downvotes;
    });
    console.log("downvote");
}
