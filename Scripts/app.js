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
      
      
      button.addEventListener("click", function buttonClick(){
            dice1.innerHTML = (("<img src='../Asset/images/dice") + [rollDice] + (".png' title='dice'/>"));
            dice2.innerHTML = (("<img src='../Asset/images/dice") + [rollDice] + (".png' title='dice'/>"));
            
   
      });
    
    
    function rollDice(){
                var randomNumber = math.floor((math.random() * 6) +1);
             };
             
         
    


})();

