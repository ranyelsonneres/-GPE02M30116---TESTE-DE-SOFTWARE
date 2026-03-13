//casos de testes

//importar o módulo da função par
const ehPar = require("./par");

//definir os casos de teste
test("2 deve ser par", ()=>{
    expect(ehPar(2)).toBe(true);
});

test("5 deve ser ímpar", () => {
  expect(ehPar(5)).toBe(false);
});

test("0 deve ser par", () => {
  expect(ehPar(0)).toBe(true);
});

test("-4 deve ser par", () => {
  expect(ehPar(-4)).toBe(true);
});

test("-3 deve ser ímpar", () => {
  expect(ehPar(-3)).toBe(false);
});
