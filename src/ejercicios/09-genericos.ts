/*
    ===== Código de TypeScript =====
*/
function queTipoSoy<T>(argumento: T) {
  return argumento;
}

let soyString = queTipoSoy('Hola mundo');
let soyNumero = queTipoSoy(12);
let soyArreglo = queTipoSoy([12,23,34]);

let soyExplicito = queTipoSoy<number>(100);