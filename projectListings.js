
function pullIdea(){

    var tableData = '';
    var ideaRef = firebase.database().ref("Ideas/").once('value',
    function(snapshot) {
        snapshot.forEach(function(childSnapShot){
            var childKey = childSnapShot.key.idea;
            var childData = childSnapShot.val();
            tableData += '<tr>';
            tableData += '<td>' + childData + '</td>';
            tableData += '</tr>';
            console.log(tableData);
        });
        $('#firetable').append(tableData);
        var tableData = '';
    });
}
