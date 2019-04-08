document.querySelector('#form').addEventListener('submit', () => {
    document.querySelector('#guardar-cliente').innerHTML = `
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Guardando...
    `;
    var form = document.querySelector('form');
    var data = new FormData(form);
    var req = new XMLHttpRequest();
    req.open("POST", 'php/clientes/añadirCliente.php', false);
    req.send(data);
    console.log(req.responseText);
    new Toast('Cliente añadido correctamente', 2000, '#mensaje').show();
    document.querySelector('#guardar-cliente').innerHTML = `
        Guardar
    `;
})

document.querySelector('#cancelar-cliente').addEventListener('click', () => {
    load('html/clientes-components/clientes.html', document.querySelector('.content'));
    mostrarClientes();
});