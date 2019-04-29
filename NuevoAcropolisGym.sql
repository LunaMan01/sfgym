create database NuevoAcropolisGym

use NuevoAcropolisGym

create table Clientes(
	Id_Cliente int not null auto_increment,
	nombre_cliente varchar(20),
	apellido_paterno varchar(15),
	apellido_materno varchar(15),
	edad int,
	activo int,
	Id_Genero int,

	primary key (Id_Cliente),
	foreign key (Id_Genero) references Generos(Id_Genero) on update cascade on delete cascade
);

create table Generos(
	Id_Genero int not null auto_increment,
	sexo varchar(15),

	primary key (Id_Genero)
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
	fecha_visita varchar(10),

	Id_Cliente int not null,

	primary key(Id_Visita),
	foreign key(Id_Cliente) references Clientes (Id_Cliente) on delete cascade on update cascade
);

create table Ventas(
	Id_Venta int not null auto_increment,

	Id_Cliente int not null,
	Id_Instructor int not null,

	primary key(Id_Venta),
	foreign key(Id_Cliente) references Clientes (Id_Cliente) on delete cascade on update cascade
);

create table VentasProductos(
	Id_Venta int not null,
	Id_Producto int not null,

	cantidad_producto int,
	total_venta double,

	primary key(Id_Venta, Id_Producto)
);

create table Productos(
	Id_Producto int not null auto_increment,
	descripcion_producto varchar(50),
	precio_producto double,
	existencia_producto int,
	fecha_caducidad varchar(10),
	primary key (Id_Producto)
);

create table Instructores(
	Id_Instructor int not null auto_increment,
	nombre_instructor varchar(20),

	primary key(Id_Instructor)
);