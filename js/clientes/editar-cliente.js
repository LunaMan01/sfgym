var elements = document.querySelectorAll('.edit-action');

function editClient () {
    var i = event.target;
    var td = i.parentNode;
    var tr = td.parentNode;
    
    var elements = tr.childNodes;
    var th = elements[1];
    var id = th.getAttribute('id');
    console.log(id);
}

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', editClient, false);
}