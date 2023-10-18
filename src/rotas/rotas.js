const express = require('express');
const usuarios = require('../controladores/usuariosController');
const login = require('../controladores/loginController');
const verificaLogin = require('../filtros/verificaLogin');
const { novaPostagem, curtir, comentar, feed } = require('../controladores/postagensController');

const rotas = express();

//cadastro de usuario
rotas.post('/cadastro', usuarios.cadastrarUsuario);

//login
rotas.post('/login', login);

//filtro para verificar usuario logado
rotas.use(verificaLogin);

//obter e atualizar perfil do usuario logado
rotas.get('/perfil', usuarios.obterPerfil);
rotas.put('/perfil', usuarios.atualizarPerfil);

//postagens
rotas.post('/postagens', novaPostagem);
rotas.post('/postagens/:postagemId/curtir', curtir);
rotas.post('/postagens/:postagemId/comentar', comentar);
rotas.get('/postagens', feed);



module.exports = rotas;