var num = 1;
for ( ; num < 100; num++ ) {
    if ( num % 3 === 0 && num % 5 === 0 ) {
                console.log( num, "FizzBuzz" );
        } else {
            console.log( num, "" );
    }
}