const divAdicional = document.querySelector('#elementos-adicionales');
class Toast {
    constructor(text, time, ToastName, type, idTemplate) {
        this.text = text;
        this.time = time;
        this.ToastName = ToastName
        this.type = type;
        this.idTemplate = idTemplate;
    }

    show() {
        document.querySelector('.modal-ommission').classList.remove('d-none');
        var content = document.createTextNode(this.text);

        document.querySelector('.alert-text').appendChild(content);
        document.querySelector('.modal-div').classList.add('fixed-top');
        if (this.type == 'success') {
            document.querySelector(this.ToastName).classList.add('alert-success');
        } else {
            document.querySelector(this.ToastName).classList.add('alert-danger');
        }
        document.querySelector(this.ToastName).classList.add('show');
        console.log('una');
        setTimeout(() => {
            document.querySelector(this.ToastName).classList.remove('show');

            document.querySelector('.alert-text').innerHTML = '';
            document.querySelector('.modal-div').classList.remove('fixed-top');
            document.querySelector('.modal-ommission').classList.add('d-none');
        }, this.time);

    }

}

class Button {
    constructor(text, id) {
        this.text = text;
        this.id = id;
    }

    getButton() {
        return `
            <div class="d-flex btn-add">
            <button class="btn btn-outline-success btn-sm my-2 my-sm-0 mr-3 rounded-pill" type="button" id="${this.id}">${this.text}</button>
            </div>
        `;
    }
}

class SearchInput {
    constructor(id) {
        this.id = id;
    }

    getSearchInput() {
        return `
        <div class"d-flex" id="buscar-div">
            <input class="form-control  rounded-pill search" type="search" placeholder="Buscar" aria-label="Search" id="${this.id}">
        </div>`;
    }
}

class Tr {
    constructor(tr) {
        this.tr = tr;
    }

    getTr() {
        return this.tr;
    }
}


class VistaCliente {
    constructor(nombre, apPaterno, apMaterno, edad, telefono, calle, numExterior, numInterior, colonia) {
        this.nombre = nombre;
        this.apPaterno = apPaterno;
        this.apMaterno = apMaterno;
        this.edad = edad;
        this.telefono = telefono;
        this.calle = calle;
        this.numExterior = numExterior;
        this.numInterior = numInterior;
        this.colonia = colonia;

    }

    render() {
        return `
        <div class="card-ver-cliente">
        <div class="container">
            <!--Mensaje: Nuevo cliente-->
    
            <div class="row">
                <div class="col-auto">
                    <i class="material-icons iconMessege">group</i>
                </div>
                <div class="col-auto">
                    <p class="p-2"><b>Ver Cliente </b></p>
                </div>
            </div>
    
            <!--Formularios-->
            <div class="row">
                <div class="col-md-6 offset-lg-3">
                    <!--Form: NOMBRE-->
                    <div class="form-group row ">
                        <label class="col-lg-4 col-form-label text-right">Nombre: </label>
                        <div class="col-lg-8 d-flex align-items-center" >
                            <!-- <input type="text" class="form-control rounded-pill" id="nombre" name="nombre_cliente" required> -->
                            <p id="nombre" class="mt-2">${this.nombre}</p>
                        </div>
                    </div>
                    <!--Form: A-PATERNO-->
                    <div class="form-group row">
                        <label class="col-lg-4 col-form-label text-right col-sd">Apellido paterno: </label>
                        <div class="col-lg-8">
                            <p id="ap-parno" class="mt-2">${this.apPaterno}</p>
                        </div>
                    </div>
                    <!--Form: A-MATERNO-->
                    <div class="form-group row">
                        <label class="col-lg-4 col-form-label text-right">Apellido Materno: </label>
                        <div class="col-lg-8">
                            
                            <p id="ap-marno" class="mt-2">${this.apMaterno}</p>
                        </div>
                    </div>
                    <!--Form: EDAD-->
                    <div class="form-group row">
                        <label class="col-lg-4 col-form-label text-right">Edad: </label>
                        <div class="col-lg-8">
                            <p id="edad" class="mt-2">${this.edad}</p>
                        </div>
                    </div>
                    <!--Form: Menu SEXO-->
                    <div class="form-group row">
                        <label class="col-lg-4 col-form-label text-right">Sexo: </label>
                        <div class="col-lg-8">
                            <p id="sexo">Hombre</p>
                        </div>
                    </div>
                    <!--Form: TELÉFONO-->
                    <div class="form-group row">
                        <label class="col-lg-4 col-form-label text-right">Teléfono: </label>
                        <div class="col-lg-8">
                            
                            <p id="telefono" class="mt-2">${this.telefono}</p>
                        </div>
                    </div>
    
                    <br>
                    <div class="col-lg-5">
                        <label>Dirección de contacto</label>
                    </div>
                    <br>
    
                    <!--Forms:  CALLE, NUM-EXT-->
                    <div class="row">
                        <div class="col">
                            <div class="form-group row">
                                <label class="col-lg-4 col-form-label text-right">Calle: </label>
                                <div class="col-lg-8">
                                    
                                    <p id="calle" class="mt-2">${this.calle}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group row">
                                <div class="col-lg-4 text-right">
                                    <label>Num Exterior:</label>
                                </div>
                                <div class="col-lg-8">
                                    
                                    <p id="num-ext" class="mt-2">${this.numExterior}</p>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <!--Forms:  NUM-INT, COLONIA-->
                    <div class="row">
                        <div class="col">
                            <div class="form-group row">
                                <label class="col-lg-4 col-form-label text-right">Num Interior: </label>
                                <div class="col-lg-8">
                                    
                                    <p id="num-int" class="mt-2">${this.numInterior}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-group row">
                                <div class="col-lg-4 text-right">
                                    <label>Colonia:</label>
                                </div>
                                <div class="col-lg-8">
                                    
                                    <p id="colonia" class="mt-2">${this.colonia}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <!--Botones-->
        <div class="row">
            <div class="col-lg-4 text-right offset-lg-8">
                <button id="ok-btn"
                    class="btn btn-outline-success btn-sm my-2 my-sm-0 mr-3 rounded-pill" type="button">Ok</button>
            </div>
        </div>
    
    </div>
        
        `

    }
}

let modalCliente = `
<div class="modal fade" id="eliminar-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      Seguro que desea eliminar esta membresía
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary rounded-pill" data-dismiss="modal">Cancelar</button>
      <button type="button" class="btn btn-outline-success rounded-pill" id="confirmar-eliminacion" data-dismiss="modal">Confirmar</button>
    </div>
  </div>
</div>
</div>
`;



let modalsMembresias = 
 `        
    <div class="modal fade" id="add-membresia-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

        <div class="d-none modal-ommission">
            <div class="d-flex justify-content-end mt-4 modal-div">
                <div class="alert alert-dismissible fade " role="alert" id="mensaje">
                    <div id="" class="alert-text"></div>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
            </div>
        </div>
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Nueva membresía</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form action="" id="add-membresia-form">
                        <div class="form-group">
                            <label for="id-cliente">Id cliente:</label>
                            <input class="form-control" id="id-cliente" name="id">
                        </div>
                        <div class="form-group">
                            <label for="fecha-inicio">Fecha inicio:</label>
                            <input class="form-control" id="fecha-inicio" name="inicio">
                        </div>
                        <div class="form-group">
                            <label for="fecha-fin">Fecha inicio:</label>
                            <input class="form-control" id="fecha-fin" name="fin">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary rounded-pill" data-dismiss="modal">Cancelar</button>
                            <button type="" class="btn btn-outline-success rounded-pill">Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
` + `
        
<div class="modal fade" id="modificar-membresia-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

    <div class="d-none modal-ommission">
        <div class="d-flex justify-content-end mt-4 modal-div">
            <div class="alert alert-dismissible fade " role="alert" id="mensaje">
                <div id="" class="alert-text"></div>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
        </div>
    </div>
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modificar membresía</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="" id="modificar-membresia-form">
                    <div class="form-group">
                        <label for="id-cliente">Id cliente:</label>
                        <input class="form-control" id="id-cliente">
                    </div>
                    <div class="form-group">
                        <label for="fecha-inicio">Fecha inicio:</label>
                        <input class="form-control" id="fecha-inicio">
                    </div>
                    <div class="form-group">
                        <label for="fecha-fin">Fecha inicio:</label>
                        <input class="form-control" id="fecha-fin">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary rounded-pill" data-dismiss="modal">Cancelar</button>
                        <button type="" class="btn btn-outline-success rounded-pill">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
` + 
` 
<div class="modal fade" id="eliminar-membresia-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Seguro que desea eliminar esta membresía
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary rounded-pill " data-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-outline-success rounded-pill" id="confirmar-eliminacion" data-dismiss="modal">Confirmar</button>
      </div>
    </div>
  </div>
</div>`;



function load(url, element) {
    req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);
    element.innerHTML = req.responseText;
}

function isEmpty(string) {
    return (!string || 0 === string.length);
}