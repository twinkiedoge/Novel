
function pullIdea(){

    var tableData = '';
    var ideaRef = firebase.database().ref("Ideas/").once('value',
    function(snapshot) {
        snapshot.forEach(function(childSnapShot){
            var childKey = childSnapShot.key;
            var childData = childSnapShot.val();
            console.log(childData.description);
            tableData += '<tr>';
            tableData += '<td>' + childData.idea + '</td>';
            tableData += '</tr>';
        });
        $('#firetable').append(tableData);
        var tableData = '';
    });

}
