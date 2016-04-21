/// <reference path="../typings/tsd.d.ts" />

// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";


    var button = null;
    var dice = ["../Asset/images/dice1.png", "../Asset/images/dice2.png", "../Asset/images/dice3.png", "../Asset/images/dice4.png", "../Asset/images/dice5.png", "../Asset/images/dice6.png"];
    //CreateJS Section ++++++++++++++++++++++++++++++++++++

    //global variables
      var dice1 = document.getElementById("dice1");
      var dice2 = document.getElementById("dice2");
      var button = document.getElementById("button");
      
      
      button.on("click", function(){
            dice1.innerHTML(dice[rollDice]);
            dice2.innerHTML(dice[rollDice]);
            
   
      });
    
    
    function rollDice(){
                var randomNumber = math.floor((math.random() * 6) +1);
             };
             
         
    
    window.onload = init;


})();

