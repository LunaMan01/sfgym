document.querySelector('#form').addEventListener('submit', function() {
    var form = document.querySelector('form');
    var data = new FormData(form);
    var req = new XMLHttpRequest();
    req.open("POST", 'php/clientes/añadir.php', false);
    req.send(data);
    console.log(req.responseText);
})

