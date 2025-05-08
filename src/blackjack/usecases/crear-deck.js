import _ from 'underscore';

// export const constante = 'Hola mundo';

/**
 * 
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta) throw new Error('Tipos de carta es obligatorio'); 
    if(!(tiposDeCarta.length === 4)) throw new Error('Tipos de carta tiene que ser de tamaño 4')
    if(!(tiposEspeciales.length === 4)) throw new Error('Tipos especiales de carta tiene que ser de tamaño 4')


    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}


export default crearDeck; 