//Project 1
//Almalki Nooralhussain





//функция для генерации случайных чисел с использованием Math.floor, Math.random.
    function randomNumberGenerator(length) {
        let result           = '';
        let characters       = '3456';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       return result;
    }
    
    var pcGuess = randomNumberGenerator(5);


// console.log(pcGuess + "\n")// Удалить(//), чтобы отобразить число, которое угадал компьютер. 

    
    var tries = 5;
    for (let i = 0 ; i < tries; i++){

     
      const readlineSync = require("readline-sync")
      var num = readlineSync.question("Try to guess the 5 digits number which my CPU came up with   " + "\n" + "You have 5 tries only!  ")
      
      

      bullsAndcows(pcGuess,num)

    }
  
    
    

    //и число пользователя, и компьютер проверяются здесь с помощью вложенных циклов (for).

  
    function bullsAndcows(randomNum, userGuess){
     

    let bulls = 0;
    let cows= 0;
    

    for(let i = randomNum.indexOf(randomNum); i < 5 ; i++){
     
    for(var j = userGuess.length; j <= 5  ; j++ ){
      

     }
     if (userGuess.includes(randomNum[i])){
      bulls +=1;
      }
      else{
        cows+=1;
      }

     

    }
    
    

   
    gameover();

    

  console.log(`Number of matched numbers is ${bulls}, the unmatched numbers is ${cows} ` );
 

  
  
 

  }
     
    

//функция окончания игры, чтобы проверить, окончена игра или нет, проверяя, соответствует ли число числу, которое было угадано компьютером.

  function gameover(){
    
  if (num == pcGuess ){
       
    console.log("You've Guessed it !, Genius"+"\n"+"      Game Over ")
    return tries =0;
    
  } 
  

  else if (num != pcGuess){
    console.log("Keep trying, You got this.. ")
  }

   

}


   

  

       
    

console.log("Game Over, Try Again ?" +  " The secret number was "+ "\n" + pcGuess )
    


   

    
   
     
    
      

         
         


      




      
     


   

   
   






   
  
 


  
  
  