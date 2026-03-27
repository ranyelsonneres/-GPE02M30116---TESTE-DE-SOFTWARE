const { validarLogin} = require("./auth");
describe("Função Validar Login", ()=>{
    test("não deve aceitar email incorreto", ()=>{
    const resultado = validarLogin("outro@email.com", "123456");

    //toBe faz uma comparação de igualdade estrita (===)
    expect(resultado).toBe("Email ou senha inválidos");
});

test("deve retornar campos obrigatórios", ()=>{
    const resultado = validarLogin("", "");
    expect(resultado).toBe("Campos obrigatórios");
});

test("deve retornar senha muito curta quando a senha tiver menos de 6 caracteres", () => {
    const resultado = validarLogin("teste@email.com", "123");
    expect(resultado).toBe("Senha muito curta");
  });

test("deve permitir login com credenciais corretas", () => {
    const resultado = validarLogin("admin@email.com", "123456");
    expect(resultado).toBe("Login realizado com sucesso");
  });

})
