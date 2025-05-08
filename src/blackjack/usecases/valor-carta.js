/**
 * Obtiene el valor de la carta
 * @param {String} carta Ejemplo: 3C
 * @returns {Number} Retorna un numero entre 1 y 11
 */


export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}