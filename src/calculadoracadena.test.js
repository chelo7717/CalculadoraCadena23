import calculadoradeCadenas from "./calculadoracadena.js"
describe("Calculadora de Cadenas", () => {
    it("deberia devolver caadena vacia", () => {
      expect(calculadoradeCadenas("")).toEqual(0);
    });
    it("deberia devolver caadena vacia", () => {
        expect(calculadoradeCadenas("1")).toEqual(1);
      });
      it("deberia devolver la suma de dos numeros separados por coma ", () => {
        expect(calculadoradeCadenas("1,2")).toEqual(3);
      });
      it("deberia devolver la suma de tres numeros separados por coma ", () => {
        expect(calculadoradeCadenas("1,2,3")).toEqual(6);
      });
      it("deberia devolver la suma de dos numeros separados por guion ", () => {
        expect(calculadoradeCadenas("1-2")).toEqual(3);
      });
  });