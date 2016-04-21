/// <reference path="../typings/tsd.d.ts" />

// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";


    //CreateJS Section ++++++++++++++++++++++++++++++++++++

    //global variables
    var screenWidth = window.innerWidth * 0.8;

    // reference to canvas element
    var canvas = document.getElementById("canvas");
    canvas.setAttribute("width", screenWidth);
    canvas.setAttribute("height", "480");

    // create a stage container object
    var stage = new createjs.Stage(canvas);

    var helloLabel = null;
    var helloLabelMove = 5;

    var button = null;
    var dice = ["../Asset/images/dice1.png", "../Asset/images/dice2.png", "../Asset/images/dice3.png", "../Asset/images/dice4.png", "../Asset/images/dice5.png", "../Asset/images/dice6.png"]

    function init() {
        console.log("Initialization");
        // enable mouseover effects for all buttons
        stage.enableMouseOver(20);
        
        // set frame rate to 60 fps
        createjs.Ticker.setFPS(60);
        // listen for frame changes and call the animationLoop function
        createjs.Ticker.addEventListener("tick", animationLoop);

        // call the main function
        main();
    }

    // runs every frame
    function animationLoop() {
        
        

        // refresh the stage object
        stage.update();
    }

    // this is where all the magic happens
    function main() {
        button = new createjs.Bitmap('../Asset/images/button.jpg');
        button.regX = 250 * 0.5;
        button.regY = 250 * 0.5;
        button.scaleX = 0.5;
        button.scaleY = 0.5;
        button.x = screenWidth * 0.5;
        button.y = 240;
        stage.addChild(button);
        
        dicen = new createjs.Bitmap('../Asset/images/dice1.png');
        dicen.regX = 250 * 0.5;
        dicen.regY = 250 * 0.5;
        dicen.scaleX = 0.5;
        dicen.scaleY = 0.5;
        dicen.x = 250 * 0.5;
        dicen.y = 125;
        stage.addChild(button);

        helloLabel = new createjs.Text("Click to Roll!", "40px Consolas", "#000000");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel.x = screenWidth * 0.5;
        helloLabel.y = 240;
        stage.addChild(helloLabel);

        button.on("click", function() {
            dicen = new createjs.Bitmap(dice[rollDice]);
            dicen.regX = 250 * 0.5;
            dicen.regY = 250 * 0.5;
            dicen.scaleX = 0.5;
            dicen.scaleY = 0.5;
            dicen.x = screenWidth * 0.5;
            dicen.y = 240;
            stage.addChild(button);
            
            function rollDice(){
                var randomNumber = math.floor((math.random() * 6) +1);
             }
            
            
            helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
            helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        });
        
        button.on('mouseover', function() {
            button.alpha = 0.5;
        })
        
        button.on('mouseout', function() {
            button.alpha = 1;
        })
    }
    
   
    
    
    window.onload = init;


})();

