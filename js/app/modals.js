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
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Nueva membresía</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form onsubmit="return false" id="add-membresia-form">
                        <div class="form-group">
                            <label for="id-cliente">Id cliente:</label>
                            <input class="form-control" id="id-cliente" name="id-cliente">
                        </div>
                        <div class="form-group">
                            <label for="fecha-inicio">Fecha inicio:</label>
                            <input class="form-control" id="fecha-inicio" name="inicio">
                        </div>
                        <div class="form-group">
                            <label for="fecha-fin">Fecha fin:</label>
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
                <form onsubmit="return false" id="modificar-membresia-form">
                    <div class="form-group">
                        <label for="id-cliente">Id cliente:</label>
                        <input class="form-control" id="id-cliente" name="id-cliente" disabled>
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
                        <button type="submit" class="btn btn-outline-success rounded-pill">Guardar</button>
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
</div>
`+ `     
<div class="modal fade" id="ver-membresia-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

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
                <h5 class="modal-title" id="exampleModalLabel">Membresía</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form onsubmit="return false" id="ver-membresia-form">
                    <div class="form-group">
                        <label for="id-cliente">Id cliente:</label>
                        <p id="id-cliente"></p>
                    </div>
                    <div class="form-group">
                        <label for="fecha-inicio">Fecha inicio:</label>
                        <p id="fecha-inicio"></p>
                    </div>
                    <div class="form-group">
                        <label for="fecha-fin">Fecha inicio:</label>
                        <p id="fecha-fin"></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-success rounded-pill" data-dismiss="modal">Ok</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
` ;

let modalsVisitas = `

<div class="modal fade" id="add-visita-modal" tabindex="-1" role="dialog"
aria-labelledby="modal-añadir-visita" aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="d-none" id="alert-add-visita">
  
    </div>
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Añadir visita</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form id="add-visita-form" onsubmit="return false">
                <div class="form-group">
                    <label>Id Cliente:</label>
                    <input type="text" class="form-control" id="id-cliente" placeholder="Id Cliente" name="id-cliente">
                </div>
                <div class="form-group">
                    <label>Fecha:</label>
                    <input type="text" class="form-control" id="fecha-visita" 
                        placeholder="dd/mm/yyyy" name="fecha">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-success">Guardar</button>
                </div>
            </form>
        </div>
        
    </div>
</div>
</div>
`+ `
<div class="modal fade" id="modificar-visita-modal" tabindex="-1" role="dialog"
aria-labelledby="modal-añadir-visita" aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Modificar visita</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form id="modificar-visita-form" onsubmit="return false">
                <div class="form-group" >
                    <label>Id Cliente:</label>
                    <input type="text" class="form-control" id="id-cliente" placeholder="Id Cliente" name="id-cliente">
                </div>

                <div class="form-group">
                    <label>Fecha:</label>
                    <input type="text" class="form-control" id="fecha-visita"
                        placeholder="dd/mm/yyyy" name="fecha">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-outline-success rounded-pill">Guardar</button>
                </div>
            </form>
        </div>
        
    </div>
</div>
</div>
` + ` 

<div class="modal fade" id="eliminar-visita-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Eliminar visita</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Seguro que desea eliminar esta visita
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary rounded-pill " data-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-outline-success rounded-pill" id="confirmar-eliminacion" data-dismiss="modal">Confirmar</button>
      </div>
    </div>
  </div>
</div>
` + `
<div class="modal fade" id="ver-visita-modal" tabindex="-1" role="dialog"
aria-labelledby="modal-añadir-visita" aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Visita</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form id="ver-visita-form">
                <div class="form-group" >
                    <label>Id visita:</label>
                    <p id="id-visita"></p>
                </div>

                <div class="form-group">
                    <label>Fecha:</label>
                    <p id="fecha-visita"></p>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-success" data-dismiss="modal">Ok</button>
        </div>
    </div>
</div>
</div>
`;

let modalsProductos = `
<div class="modal fade" id="add-producto-modal" tabindex="-1" role="dialog"
aria-labelledby="modal-añadir-producto" aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Añadir producto</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form id="add-producto-form" onsubmit="return false">
                <div class="form-group">
                    <label>Nombre:</label>
                    <input type="text" class="form-control" id="nombre-producto" name="nombre-producto"
                        placeholder="Nombre del producto">
                </div>

                <div class="form-group">
                    <label>Fecha de caducidad:</label>
                    <input type="text" class="form-control" id="fecha-caducidad" name="fecha-caducidad"
                        placeholder="dd/mm/yyyy">
                </div>

                <div class="form-group">
                    <label>Existencia:</label>
                    <input type="text" class="form-control" id="existencia" name="existencia"
                        placeholder="Cantidad de productos">
                </div>

                <div class="form-group">
                    <label>Precio:</label>
                    <input type="text" class="form-control" id="precio-producto" name="precio"
                        placeholder="Precio">
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-success">Confirmar</button>
                </div>
            </form>
        </div>
        
    </div>
</div>
</div>
`+ `
<div class="modal fade" id="modificar-producto-modal" tabindex="-1" role="dialog"
aria-labelledby="modal-modificar-producto" aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Añadir producto</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form id="modificar-producto-form" onsubmit="return false">
                <div class="form-group">
                    <label>Id Productos</label>
                    <input type="text" class="form-control" id="id-producto" name="id-prod"
                    placeholder="Nombre del producto">
                </div>
                <div class="form-group">
                    <label>Nombre:</label>
                    <input type="text" class="form-control" id="nombre-producto" name="nombre-producto"
                        placeholder="Nombre del producto">
                </div>

                <div class="form-group">
                    <label>Fecha de caducidad:</label>
                    <input type="text" class="form-control" id="fecha-caducidad" name="fecha-caducidad"
                        placeholder="dd/mm/yyyy">
                </div>

                <div class="form-group">
                    <label>Existencia:</label>
                    <input type="text" class="form-control" id="existencia-producto" name="existencia"
                        placeholder="Cantidad de productos">
                </div>

                <div class="form-group">
                    <label>Precio:</label>
                     <input type="text" class="form-control" id="precio-producto" name="precio"
                        placeholder="Precio">
                 </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-success">Confirmar</button>
                </div>
            </form>
        </div>
        
    </div>
</div>
</div>

` + `
<div class="modal fade" id="eliminar-producto-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Eliminar visita</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      Seguro que desea eliminar este producto
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary rounded-pill " data-dismiss="modal">Cancelar</button>
      <button type="button" class="btn btn-outline-success rounded-pill" id="confirmar-eliminacion" data-dismiss="modal">Confirmar</button>
    </div>
  </div>
</div>
</div>
` + `
<div class="modal fade" id="ver-producto-modal" tabindex="-1" role="dialog"
aria-labelledby="modal-modificar-producto" aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Producto</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form id="ver-producto-form" onsubmit="return false">
                <div class="form-group">
                    <label>Id:</label>
                    <p id="id-producto" name="nombre"
                    ></p>
                </div>
                <div class="form-group">
                    <label>Descripción:</label>
                    <p id="nombre-producto" name="nombre"
                    ></p>
                </div>

                <div class="form-group">
                    <label>Fecha de caducidad:</label>
                    <p  id="fecha-caducidad" name="fecha-caducidad"></p>
                </div>

                <div class="form-group">
                    <label>Existencia:</label>
                    <p  id="existencia-producto" name="existencia-producto"></p>
                </div>
                <div class="form-group">
                    <label>Precio:</label>
                    <p  id="precio-producto" ></p>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Ok</button>
                </div>
            </form>
        </div>
        
    </div>
</div>
</div>

`