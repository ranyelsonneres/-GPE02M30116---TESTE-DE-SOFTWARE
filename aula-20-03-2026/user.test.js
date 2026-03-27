const { criarUsuario } = require("./user");

describe("Função criarUsuario", () => {
  test("deve criar um objeto de usuário corretamente", () => {
    const usuario = criarUsuario("Ana");
    // toEqual compara arrays e objetos
    expect(usuario).toEqual({
      nome: "Ana",
      ativo: true
    });
  });
});