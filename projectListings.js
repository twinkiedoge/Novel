
function pullIdea(){

    var tableData = '';
    var ideaRef = firebase.database().ref("Ideas/").once('value',
    function(snapshot) {
        snapshot.forEach(function(childSnapShot){
            var childKey = childSnapShot.key;
            var childData = childSnapShot.val();
            console.log(childData.idea);
            console.log(childData.description);
            tableData += '<button type="button" class="collapsible">' + childData.idea + '</button>';
            tableData += '<button type="button" class="upvote" id="' + childKey + '">' + "onclick='upvote()'""+ "</button>";
            tableData += '<div class="content">' + '<p>' + childData.description + '</p>' + '</div>';
        });
        $('#firetable').append(tableData);
        var tableData = '';
        collapsible();
    });
}

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

function upvote(){

}
