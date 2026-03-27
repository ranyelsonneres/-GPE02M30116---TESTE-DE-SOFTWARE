function criarUsuario(nome) {
  return {
    nome,
    ativo: true
  };
}
module.exports = { criarUsuario };