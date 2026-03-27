const { listarUsuarios } = require("./lista");

describe("Função listarUsuarios", () => {
  test("deve retornar um array com 3 usuários", () => {
    const usuarios = listarUsuarios();

    //toHaveLength é um matcher específico para tamanho de arrays
    expect(usuarios).toHaveLength(3);
  });

  test("deve conter o nome Carlos", () => {
    const usuarios = listarUsuarios();
    
    //toContain verifica se um valor existe dentro do array
    expect(usuarios).toContain("Carlos");
  });

  test("deve retornar exatamente a lista esperada", () => {
    const usuarios = listarUsuarios();

    // verifica igualdade completa (ordem e valores)
    // toEqual compara arrays e objetos
    expect(usuarios).toEqual(["Ana", "Bruno", "Carlos"]); 
  });
});