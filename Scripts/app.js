/// <reference path="../typings/tsd.d.ts" />

// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";

    var button = null;
    //CreateJS Section ++++++++++++++++++++++++++++++++++++

    //global variables
      var dice1 = document.getElementById("dice1");
      var dice2 = document.getElementById("dice2");
      var button = document.getElementById("button");
      var number1 = document.getElementById("number1");
      var number2 = document.getElementById("number2");
      
      button.addEventListener("click", function(){
            rollDice();
            number1.innerHTML = [rolledDice]
            dice1.innerHTML = (("<img src='../Asset/images/dice") + [rolledDice] + (".png' title='dice'/>"));
            rollDice();
            number2.innerHTML = [rolledDice]
            dice2.innerHTML = (("<img src='../Asset/images/dice") + [rolledDice] + (".png' title='dice'/>"));
            
   
      });
    
    
    function rollDice(){
              var rolledDice = Math.floor((Math.random() * 6) +1);
             }
             
         
    


})();

