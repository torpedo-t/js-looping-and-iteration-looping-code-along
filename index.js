// Code your solutions in this file
// describe( 'writeCards()', () => {

//     it( 'returns an array of thank you messages for each name provided to the function', () => {
//       expect( writeCards( [ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise' ) )
//         .to.deep.eq( [ 'Thank you, Lisa, for the wonderful surprise gift!', 'Thank you, Kaitlin, for the wonderful surprise gift!', 'Thank you, Jan, for the wonderful surprise gift!' ] );
//     } );
//   } );

const names = ["Lisa", "Kaitlin", "Jan"]

function writeCards(names, "surprise") {
    for(let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return names;
}