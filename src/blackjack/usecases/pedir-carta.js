/**
 * @param {Array<String>} deck  Ejemplo: ['3C','4D','5H','3S'] 
 * @returns {String} Retorna un string con una carta '3C'; 
 */

export const pedirCarta = (deck) => {

    if(!deck) throw new Error('Se esperaba un deck de cartas');

    if ( deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}