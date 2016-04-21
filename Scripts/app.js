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
            var roll1 = Math.floor((Math.random() * 6) +1);
            number1.innerHTML = [roll1];
            dice1.innerHTML = (("<img src='../Asset/images/dice") + [roll1] + (".png' title='dice'/>"));
            var roll2 = Math.floor((Math.random() * 6) +1);
            number2.innerHTML = [roll2];
            dice2.innerHTML = (("<img src='../Asset/images/dice") + [roll2] + (".png' title='dice'/>"));
            
   
      });
    
  
             
         
    


})();

