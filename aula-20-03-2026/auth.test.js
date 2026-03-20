const { validarLogin} = require("./auth");

test("não deve aceitar email incorreto", ()=>{
    const resultado = validarLogin("outro@email.com", "123456");
    expect(resultado).toBe("Email ou senha inválidos");
});

test("deve retornar campos obrigatórios", ()=>{
    const resultado = validarLogin("", "");
    expect(resultado).toBe("Campos obrigatórios");
});