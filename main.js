// Fizz Buzz test:
//  Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.



for (var i = 1; i <= 100; i++) {  // Numeri da 1 a 100

  if ((i % 3 === 0) && (i % 5 === 0)) {   //Stampa i multipli sia di 3 che di 5
  console.log("FizzBuzz");
  } else if (i % 3 === 0) {                 //Stampa i multipli solo di 3
   console.log("Fizz");
  } else if (i % 5 === 0) {                //Stampa i multipli solo di 5
   console.log("Buzz");
   } else {                                 //Stampa tutti gli altri
    console.log(i);
   }
}
