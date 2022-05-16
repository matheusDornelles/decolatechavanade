  // o "...args" une os parametros em um array

function confereTamanho(...args){
    console.log(args.length)
  }
  confereTamanho() //0
  confereTamanho(1, 2) //2
  confereTamanho( 3, 4, 5) //3

  //