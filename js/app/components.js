const divAdicional = document.querySelector('#elementos-adicionales');
class Toast {

    constructor(divContainerId, mensaje, time, type) {
        this.divContainerId = divContainerId;
        this.mensaje = mensaje;
        this.time = time;
        this.type = type;
    }

    getAndShow() {
        console.log(this.divContainerId);
        document.querySelector(this.divContainerId).classList.remove('d-none');

        document.querySelector(this.divContainerId).innerHTML = `
        <div class="d-flex justify-content-end mt-4 fixed-top">
            <div class="alert alert-dismissible fade show ${this.type} " role="alert">
                <div class="alert-text">${this.mensaje}</div>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
             </div>
        </div>
        `;

        setTimeout(() => {
            document.querySelector(this.divContainerId).classList.add('d-none');
            document.querySelector(this.divContainerId).innerHTML = ' ';
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
            <div class="d-lg-flex btn-add d-none">
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
        <div class = "d-flex justify-content-center mt-0 mb-0" id="buscar-div">
            
                <input class="form-control  rounded-pill mt-0 mt-lg-2" type="search" placeholder="Buscar" aria-label="Search" id="${this.id}">
            
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



function load(url, element) {
    req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);
    element.innerHTML = req.responseText;
}

