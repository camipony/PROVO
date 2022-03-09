CREATE DATABASE provo;

CREATE TABLE usuarios(
    id serial,
    name_user text,
    username text,
    email text,
    pass text,
    primary key (id)
);

CREATE TABLE productos(
    id serial,
    id_usuario int,
    name_product text,
    precio int,
    descripcion text,
    categoria text,
    cantidad_exitente_producto int,
    primary key (id),
    foreign key (id_usuario) references usuarios (id)
);

CREATE TABLE facturas(
    id serial,
    id_usuario int,
    total_a_pagar int,
    total_productos int,
    fecha_creacion int,
    activa boolean,
    primary key (id),
    foreign key (id_usuario) references usuarios (id)
);

CREATE TABLE item_factura(
    id serial,
    id_factura int,
    id_producto int,
    cantidad_producto int,
    primary key (id),
    foreign key (id_factura) references facturas (id),
    foreign key (id_producto) references productos (id)
);