// Code your solutions in this file
// describe( 'writeCards()', () => {

//     it( 'returns an array of thank you messages for each name provided to the function', () => {
//       expect( writeCards( [ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise' ) )
//         .to.deep.eq( [ 'Thank you, Lisa, for the wonderful surprise gift!', 'Thank you, Kaitlin, for the wonderful surprise gift!', 'Thank you, Jan, for the wonderful surprise gift!' ] );
//     } );
//   } );



function writeCards(names, event) {
    let array = []
    for(let i = 0; i < names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return array
}

function countDown(number) { 
    while (number >= 0) {
        console.log(number);
        number--
    }    
}

// I expect this function to return a number for each iteration and incrementally reduce the number 10, 9, 8, 7...
// Stop iteration once we get to 0
// dynamically have 11 logs when starting at 10, while also having 5 logs when started at 4