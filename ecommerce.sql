create table ecommerces (
	id int not null auto_increment,
    nome varchar(255) not null,
    endereco varchar(255) not null,
    telefone varchar(16) not null,
    primary key (id)
);

create table clientes (
	id int not null auto_increment,
    nome varchar(255) not null,
    cpf varchar(255) not null,
    endereco varchar(255) not null,
    primary key(id)
);

create table produtos (
	id int not null auto_increment,
    nome varchar(255) not null,
    valor double not null,
    primary key(id)
);

create table pedidos(
	id int not null auto_increment,
    id_ecommerce int not null,
    id_cliente int not null,
    status varchar(255) not null,
    valor_total double not null,
    primary key (id),
    foreign key (id_ecommerce) references ecommerces(id),
    foreign key (id_cliente) references clientes(id)
);

create table pedidos_produtos (
	id int not null auto_increment,
    id_pedido int not null,
    id_produto int not null,
    quantidade int not null,
    primary key (id),
    foreign key (id_pedido) references pedidos(id),
    foreign key (id_produto) references produtos(id)
);
