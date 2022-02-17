CREATE TABLE usuarios(
    id serial NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password_ VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);

