create database api_usuarios;

Use api_usuarios;

create table usuarios (
	id int auto_increment primary key,
	nome varchar(100) not null,
    email varchar(100) not null
);
