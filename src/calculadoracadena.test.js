import calculadoradeCadenas from "./calculadoracadena.js"
describe("Calculadora de Cadenas", () => {
    it("deberia devolver caadena vacia", () => {
      expect(calculadoradeCadenas("")).toEqual(0);
    });
    it("deberia devolver caadena vacia", () => {
        expect(calculadoradeCadenas("1")).toEqual(0);
      });
  });