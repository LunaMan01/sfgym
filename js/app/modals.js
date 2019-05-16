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
                            <input class="form-control" id="id-cliente" name="id-cliente" required>
                        </div>
                        <div class="form-group">
                            <label for="fecha-inicio">Fecha inicio:</label>
                            <input class="form-control" id="fecha-inicio-add" name="inicio" required>
                        </div>
                        <div class="form-group">
                            <label for="fecha-fin-add">Fecha fin:</label>
                            <input class="form-control" id="fecha-fin-add" name="fin" required>
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
                    <input type="text" class="form-control numeric-id-add" id="id-cliente" placeholder="Id Cliente" name="id-cliente" required>
                </div>
                <div class="form-group">
                    <label>Fecha:</label>
                    <input type="text" class="form-control date-add" id="fecha-visita" 
                        placeholder="dd/mm/yyyy" name="fecha" required>
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
                    <input type="text" class="form-control numeric-id-update" id="id-cliente" placeholder="Id Cliente" name="id-cliente" >
                </div>

                <div class="form-group">
                    <label>Fecha:</label>
                    <input type="text" class="form-control date-update" id="fecha-visita"
                        placeholder="dd/mm/yyyy" name="fecha" required>
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
                    <input type="text" class="form-control date-add" id="fecha-caducidad" name="fecha-caducidad"
                        placeholder="dd/mm/yyyy">
                </div>

                <div class="form-group">
                    <label>Existencia:</label>
                    <input type="text" class="form-control numeric-add" id="existencia" name="existencia"
                        placeholder="Cantidad de productos">
                </div>

                <div class="form-group">
                    <label>Precio:</label>
                    <input type="text" class="form-control numeric-price-add" id="precio-producto" name="precio"
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
                    placeholder="Nombre del producto" readonly>
                </div>
                <div class="form-group">
                    <label>Nombre:</label>
                    <input type="text" class="form-control" id="nombre-producto" name="nombre-producto"
                        placeholder="Nombre del producto">
                </div>

                <div class="form-group">
                    <label>Fecha de caducidad:</label>
                    <input type="text" class="form-control date-update" id="fecha-caducidad" name="fecha-caducidad"
                        placeholder="dd/mm/yyyy">
                </div>

                <div class="form-group">
                    <label>Existencia:</label>
                    <input type="text" class="form-control numeric-update" id="existencia-producto" name="existencia"
                        placeholder="Cantidad de productos">
                </div>

                <div class="form-group">
                    <label>Precio:</label>
                     <input type="text" class="form-control numeric-price-update" id="precio-producto" name="precio"
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

`;

// mal
let modalsGastos = `
<div class="modal fade" id="add-gasto-modal" tabindex="-1" role="dialog" aria-labelledby="add-gasto-modal"
aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Añadir gasto</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form id="add-gasto-form" onsubmit="return false">
                <div class="form-group">
                    <label>Gasto:</label>
                    <input type="text" class="form-control" id="nombre-gasto" name="descripcion-gasto"
                        placeholder="Descripción de gasto">
                </div>

                <div class="form-group">
                    <label>Monto:</label>
                    <input type="text" class="form-control numeric-add" id="monto-gasto" name="monto-gasto" placeholder="Monto de gasto">
                </div>

                <div class="form-group">
                    <label>Fecha:</label>
                    <input type="text" class="form-control date-add" id="fecha-gasto" name="fecha-gasto" placeholder="dd/mm/yyyy">
                </div>

                <div class="form-group">
                    <label for="categorias-gastos">Categoria</label>
                    <select class="form-control" id="categorias-gastos" name="tipo-gasto[]">
                        <option value="1">Gasto fijo</option>
                        <option value="2">Gasto mantenimiento</option>
                        <option value="3">Inversión</option>
                    </select>
                </div>

                <!--
                <div class="form-group">
                    <a>
                        <p class="text-right text-info"> + Nueva categoria</p>
                    </a>
                </div>
                -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Salir</button>
                    <button type="submit" class="btn btn-success">Guardar</button>
                </div>

            </form>
        </div>
    </div>
</div>
</div>
` + ` 

<div class="modal fade" id="modificar-gasto-modal" tabindex="-1" role="dialog" aria-labelledby="add-gasto-modal"
aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Modificar gasto</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form id="modificar-gasto-form" onsubmit="return false">
                <div class="form-group">
                    <label>Gasto:</label>
                    <input type="text" class="form-control" id="nombre-gasto" name="descripcion-gasto"
                        placeholder="Descripción de gasto">
                </div>

                <div class="form-group">
                    <label>Monto:</label>
                    <input type="text" class="form-control numeric-update" id="monto-gasto" name="monto-gasto" placeholder="Monto de gasto">
                </div>

                <div class="form-group">
                    <label>Fecha:</label>
                    <input type="text" class="form-control date-update" id="fecha-gasto" name="fecha-gasto" placeholder="dd/mm/yyyy">
                </div>

                <div class="form-group">
                    <label for="categorias-gastos">Categoria</label>
                    <select class="form-control" id="categorias-gastos" name="tipo-gasto">
                        <option  value="1">1</option>
                        <option>2</option>
                    </select>
                </div>

                <div class="form-group">
                    <a>
                        <p class="text-right text-info"> + Nueva categoria</p>
                    </a>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Salir</button>
                    <button type="submit" class="btn btn-success">Guardar</button>
                </div>

            </form>
        </div>
    </div>
</div>
</div>
` + ` 
<div class="modal fade" id="eliminar-gasto-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Eliminar gasto</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      Seguro que desea eliminar este aparato
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary rounded-pill " data-dismiss="modal">Cancelar</button>
      <button type="button" class="btn btn-outline-success rounded-pill" id="confirmar-eliminacion" data-dismiss="modal">Confirmar</button>
    </div>
  </div>
</div>
</div>
` + ` 
<div class="modal fade" id="ver-gasto-modal" tabindex="-1" role="dialog" aria-labelledby="add-gasto-modal"
aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Modificar gasto</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form id="ver-gasto-form" onsubmit="return false">
                <div class="form-group">
                    <label>Gasto:</label>
                    <p id="nombre-gasto"></p>
                </div>

                <div class="form-group">
                    <label>Monto:</label>
                    <p id="monto-gasto"></p>
                </div>

                <div class="form-group">
                    <label>Fecha:</label>
                    <p id="fecha-gasto"></p>
                </div>

                <div class="form-group">
                    <label for="categorias-gastos">Categoria</label>
                    <select class="form-control" id="categorias-gastos" name="tipo-gasto">
                        <option  value="1">1</option>
                        <option>2</option>
                    </select>
                </div>

                <div class="form-group">
                    <a>
                        <p class="text-right text-info"> + Nueva categoria</p>
                    </a>
                </div>

                <div class="modal-footer">
                    
                    <button type="submit" class="btn btn-success" data-dismiss="modal">Ok</button>
                </div>

            </form>
        </div>
    </div>
</div>
</div>
`
;

let modalsAparatos = `
<div class="modal fade" id="add-aparato-modal" tabindex="-1" role="dialog" aria-labelledby="add-aparato-modal"
aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Añadir aparato</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form id="add-aparato-form" onsubmit="return false">
                <div class="form-group">
                    <label>Nombre:</label>
                    <input type="text" class="form-control" id="nombre-aparato" name="nombre-aparato"
                        placeholder="Nombre de aparato" required>
                </div>

                <div class="form-group">
                    <label>Precio por compra:</label>
                    <input type="text" class="form-control numeric-add" id="precio-por-compra"
                        placeholder="Precio por compra">
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Salir</button>
                    <button type="submit" class="btn btn-success">Guardar</button>
                </div>

            </form>
        </div>
    </div>
</div>
</div>
` + ` 
<div class="modal fade" id="modificar-aparato-modal" tabindex="-1" role="dialog" aria-labelledby="add-aparato-modal"
aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Modificar aparato</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form id="modificar-aparato-form" onsubmit="return false">
                <div class="form-group">
                    <label>Id:</label>
                    <input type="text" class="form-control" id="id-aparato"
                        readonly >
                </div>

                <div class="form-group">
                    <label>Descripción:</label>
                    <input type="text" class="form-control numeric-update" id="nombre-aparato"
                        name="nombre-aparato" required>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Salir</button>
                    <button type="submit" class="btn btn-success">Guardar</button>
                </div>

            </form>
        </div>
    </div>
</div>
</div>
` + `
<div class="modal fade" id="eliminar-aparato-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Eliminar aparato</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      Seguro que desea eliminar este aparato
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary rounded-pill " data-dismiss="modal">Cancelar</button>
      <button type="button" class="btn btn-outline-success rounded-pill" id="confirmar-eliminacion" data-dismiss="modal">Confirmar</button>
    </div>
  </div>
</div>
</div>
` + `
<div class="modal fade" id="ver-aparato-modal" tabindex="-1" role="dialog" aria-labelledby="add-aparato-modal"
aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Aparato</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form id="ver-aparato-form">
                <div class="form-group">
                    <label>Id:</label>
                    <p id="id-aparato"></p>
                </div>

                <div class="form-group">
                    <label>Descripción:</label>
                    <p id="nombre-aparato"></p>
                </div>

                <div class="modal-footer">
                    <button type="submit" class="btn btn-success" data-dismiss="modal">Ok</button>
                </div>

            </form>
        </div>
    </div>
</div>
</div>
`;

let modalsCompras = ` 
<div class="modal fade" id="add-compra-modal" tabindex="-1" role="dialog" aria-labelledby="add-compra-modal"
aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Añadir compra</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form id="add-compra-form" onsubmit="return false">
                <div class="form-group">
                <label>Id instructor:</label>
                <input type="text" class="form-control" id="id-instructor" name="id-instructor"
                    >
                </div>
                <div class="form-group">
                    <label>Descripción:</label>
                    <input type="text" class="form-control" id="descripcion-producto" name="descripcio-producto"
                        placeholder="Descripción de compra" required>
                </div>


                <div class="form-group">
                    <label>Cantidad:</label>
                    <input type="text" class="form-control numeric-c-add" id="cantidad" name="cantidad"
                        placeholder="No. de articulos comprados" required>
                </div>

                <div class="form-group">
                    <label>Monto:</label>
                    <input type="text" class="form-control numeric-m-add" id="monto-compra" name="monto_compra"
                        placeholder="Monto de compra" required>
                </div>

                <div class="form-group">
                    <label>Fecha:</label>
                    <input type="text" class="form-control date-add" id="fecha-compra"  name="fecha-compra" placeholder="dd/mm/yyyy" required>
                </div>


                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-success">Guargar</button>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
` + `

<div class="modal fade" id="modificar-compra-modal" tabindex="-1" role="dialog" aria-labelledby="add-compra-modal"
aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Modificar compra</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form id="modificar-compra-form" onsubmit="return false">
                <div class="form-group">
                    <label>Id compra:</label>
                    <input type="text" class="form-control" id="id-compra" name="id-instructor" readonly>
                </div>
                <div class="form-group">
                    <label>Id instructor:</label>
                    <input type="text" class="form-control" id="id-instructor" name="id-instructor">
                </div>
                <div class="form-group">
                    <label>Descripción:</label>
                    <input type="text" class="form-control" id="descripcion-producto" name="descripcion-compra"
                        placeholder="Descripción de compra" required>
                </div>


                <div class="form-group">
                    <label>Cantidad:</label>
                    <input type="text" class="form-control numeric-c-update" id="cantidad" name="cantidad"
                        placeholder="No. de articulos comprados">
                </div>

                <div class="form-group">
                    <label>Monto:</label>
                    <input type="text" class="form-control numeric-m-update" id="monto-compra" name="monto_compra"
                        placeholder="Monto de compra">
                </div>

                <div class="form-group">
                    <label>Fecha:</label>
                    <input type="text" class="form-control date-update" id="fecha-compra"  name="fecha-compra" placeholder="dd/mm/yyyy">
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <button type="submit" class="btn btn-success">Guargar</button>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
` + ` 
<div class="modal fade" id="eliminar-compra-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Eliminar compra</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      Seguro que desea eliminar esta compra
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary rounded-pill " data-dismiss="modal">Cancelar</button>
      <button type="button" class="btn btn-outline-success rounded-pill" id="confirmar-eliminacion" data-dismiss="modal">Confirmar</button>
    </div>
  </div>
</div>
</div>
` + `
<div class="modal fade" id="ver-compra-modal" tabindex="-1" role="dialog" aria-labelledby="add-compra-modal"
aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Modificar compra</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form id="ver-compra-form" onsubmit="return false">
                <div class="form-group">
                    <label>Id compra:</label>
                    <p id="id-compra"></p>
                </div>
                <div class="form-group">
                    <label>Id instructor:</label>
                    <p id="id-instructor"></p>
                </div>
                <div class="form-group">
                    <label>Descripción:</label>
                    <p id="descripcion-producto"></p>
                </div>


                <div class="form-group">
                    <label>Cantidad:</label>
                    <p id="cantidad"></p>
                </div>

                <div class="form-group">
                    <label>Monto:</label>
                    <p id="monto-compra"></p>
                </div>

                <div class="form-group">
                    <label>Fecha:</label>
                    <p id="fecha-compra"></p>
                </div>

                <div class="form-group">
                    <label for="categoria-compra">Categoria</label>
                    <select class="form-control" id="categoria-compra">
                        <option>1</option>
                        <option>2</option>
                    </select>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-success" data-dismiss="modal">Ok</button>
                </div>
            </form>
        </div>
    </div>
</div>
</div>

`;