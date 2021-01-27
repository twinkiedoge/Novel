
function pullIdea(){

    var tableData = '';
    var ideaRef = firebase.database().ref("Ideas/").once('value',
    function(snapshot) {
        snapshot.forEach(function(childSnapShot){
            var childKey = childSnapShot.key;
            var childData = childKey.idea.val();
            console.log(childData);
            tableData += '<tr>';
            tableData += '<td>' + childData + '</td>';
            tableData += '</tr>';
        });
        $('#firetable').append(tableData);
        var tableData = '';
    });
}
