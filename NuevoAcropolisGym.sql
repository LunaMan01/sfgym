create database AcropolisGym;

use AcropolisGym;

create table Generos(
	Id_Genero int not null auto_increment,
	sexo varchar(15),

	primary key (Id_Genero)
);

create table Clientes(
	Id_Cliente int not null auto_increment,
	nombre_cliente varchar(20),
	apellido_paterno varchar(15),
	apellido_materno varchar(15),
	edad varchar(11),
	activo int,
	Id_Genero int,

	primary key (Id_Cliente),
	foreign key (Id_Genero) references Generos(Id_Genero) on update cascade on delete cascade
);

create table Telefonos(
	Id_Cliente int not null,
	numero varchar(12),

	foreign key (Id_Cliente) references Clientes(Id_Cliente) on delete cascade on update cascade
);

create table Direcciones(
	Id_Cliente int not null,
	colonia varchar(30),
	calle varchar(30),
	numero_exterior int,
	numero_interior int,

	foreign key (Id_Cliente) references Clientes (Id_Cliente) on delete cascade on update cascade 
);

create table Membresias(
	Id_Membresia int not null auto_increment,
	Id_Cliente int not null,
	fecha_inicio varchar(10),
	fecha_fin varchar(10),
	
	primary key(Id_Membresia),
	foreign key (Id_Cliente) references Clientes (Id_Cliente) on delete cascade on update cascade
);

create table Visitas(
	Id_Visita int not null auto_increment,
	fecha_visitas varchar(10),

	Id_Cliente int not null,

	primary key(Id_Visita),
	foreign key(Id_Cliente) references Clientes (Id_Cliente) on delete cascade on update cascade
);

create table TipoVenta(
	Id_TipoVenta int not null auto_increment,
	tipo_venta varchar(30),

	primary key(Id_TipoVenta)
);

create table Ventas(
	Id_Venta int not null auto_increment,
	total_venta double,	
	fecha_venta varchar(10),
	cancelada int,

	Id_Cliente int not null,
	Id_Instructor int not null,

	primary key(Id_Venta),
	foreign key(Id_Cliente) references Clientes (Id_Cliente) on delete cascade on update cascade
);

create table Productos(
	Id_Producto int not null auto_increment,
	descripcion_producto varchar(50),
	fecha_caducidad varchar(10),
	existencia_producto int,
	precio_producto double,

	primary key (Id_Producto)
);

create table VentasProductos(
	Id_Venta int not null,
	Id_Producto int not null,

	cantidad_producto int,
	subtotal_venta double,

	foreign key(Id_Venta) references Ventas (Id_Venta) on delete cascade on update cascade,
	foreign key(Id_Producto) references Productos (Id_Producto) on delete cascade on update cascade
);

create table VentasMembresias(
	Id_Venta int not null,
	Id_Membresia int not null,
	total double,

	foreign key (Id_Venta) references Ventas (Id_Venta) on delete cascade on update cascade,
	foreign key (Id_Membresia) references Membresias (Id_Membresia) on delete cascade on update cascade
);

create table VentasVisitas(
	Id_Venta int not null,
	Id_Visita int not null,
	total double,

	foreign key (Id_Venta) references Ventas (Id_Venta) on delete cascade on update cascade,
	foreign key (Id_Visita) references Visitas (Id_Visita) on delete cascade on update cascade
);

create table Aparatos(
	Id_Aparato int not null auto_increment,
	nombre_aparato varchar(50),

	primary key(Id_Aparato)
);

create table Instructores(
	Id_Instructor int not null auto_increment,
	nombre_instructor varchar(20),
	password1 varchar(20),

	primary key(Id_Instructor)
);

create table TipoCompras(
	Id_TipoCompra int not null auto_increment,
	tipo_compra varchar(25),

	primary key(Id_TipoCompra)
);

create table Compras(
	Id_Compra int not null auto_increment,
	Id_Instructor int not null,
	Id_TipoCompra int not null,

	descripcion_compra varchar(50),
	monto_compra int,
	fecha_compra varchar(10),

	primary key(Id_Compra),
	foreign key(Id_Instructor) references Instructores(Id_Instructor) on delete cascade on update cascade,
	foreign key(Id_TipoCompra) references TipoCompras(Id_TipoCompra) on delete cascade on update cascade
);

create table TipoGastos(
	Id_Tipo int not null auto_increment,
	tipo_gasto varchar(25),

	primary key(Id_Tipo)
);

create table Gastos(
	Id_Gasto int not null auto_increment,
	descripcion_gasto varchar(50),
	monto_gasto double,
	fecha_gasto varchar(10),

	Id_Tipo int not null,

	primary key(Id_Gasto),
	foreign key(Id_Tipo) references TipoGastos (Id_Tipo) on delete cascade on update cascade
);

insert into Generos (sexo) values ('Masculino');
insert into Generos (sexo) values ('Femenino');
insert into Generos (sexo) values ('Otro');

insert into Instructores (nombre_instructor, password1) values ('Luna', '123');
insert into Instructores (nombre_instructor, password1) values ('Carlos', '123');
insert into Instructores (nombre_instructor, password1) values ('Alberto', '123');

insert into TipoCompras (tipo_compra) values ('Producto Nuevo');
insert into TipoCompras (tipo_compra) values ('Aparato');
insert into TipoCompras (tipo_compra) values ('Otro');
insert into TipoCompras (tipo_compra) values ('Producto Existente');

insert into TipoGastos (tipo_gasto) values ('Gasto Fijo');
insert into TipoGastos (tipo_gasto) values ('Gasto Mantenimiento');
insert into TipoGastos (tipo_gasto) values ('Inversion');

insert into TipoVenta (tipo_venta) values ('Producto');
insert into TipoVenta (tipo_venta) values ('Membresia');
insert into TipoVenta (tipo_venta) values ('Visita');

CREATE trigger addProductos BEFORE UPDATE ON Ventas for each
ROW UPDATE Productos, VentasProductos, Ventas SET existencia_producto = existencia_producto+cantidad_producto
WHERE Ventas.Id_Venta = VentasProductos.Id_Venta AND Productos.Id_Producto = VentasProductos.Id_Producto;

