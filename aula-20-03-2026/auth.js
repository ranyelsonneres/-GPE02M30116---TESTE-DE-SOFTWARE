function validarLogin(email, senha) {
  if (!email || !senha) {
    return "Campos obrigatórios";
  }

  if (senha.length < 6) {
    return "Senha muito curta";
  }

  if (email = "admin@email.com" && senha === "123456") {
    return "Login realizado com sucesso";
  }

  return "Email ou senha inválidos";
}

module.exports = { validarLogin };
