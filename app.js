const max=prompt("Enter the max number");


const random= Math.floor(Math.random()*max)+1;




let guess=prompt("Guess the number");


while(true){
    if(guess=="quit"){
        console.log("QUITTED");
        break;
    } 

    if (guess== random){
        console.log("CONGO");
        break;
    }else if(guess < random){
        guess=prompt("TOO SMALL");
        
    }
    else {
       guess= prompt("TOO BIG");
        
    }

}
