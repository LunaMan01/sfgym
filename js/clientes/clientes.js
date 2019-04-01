document.querySelector('#add-cliente-btn').addEventListener('click', function () {
    load('html/clientes-components/agregar-cliente.html', document.querySelector('.content'));
    this.classList.add('d-none');
    document.querySelector('#reporte-cliente-btn').classList.add('d-none');
    document.querySelector('#buscar-cliente-input').classList.add('d-none');
});

function load(url, element) {
    req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);
    element.innerHTML = req.responseText;
}
