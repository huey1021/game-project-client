'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts
require('./assets/scripts/index.js');

// styles
require('./assets/styles/index.scss');

// attach jQuery globally
require('expose?$!jquery');
require('expose?jQuery!jquery');

// attach getFormFields globally

require('expose?getFormFields!./lib/get-form-fields.js');

//let gameBoard = ['','','','','','','','','']; // referencing array?

 let playerOne= 'x';
 let playerTwo= 'o';
 let turn = 0;
 let boxCheck;
 let box0;
 let box1;
 let box2;
 let box3;
 let box4;
 let box5;
 let box6;
 let box7;
 let box8;
 let winCheck;
 let whoWonRestart;
 let clearGrid;
 let moveFirst;
 let moveSecond;
 let xWon = false;
 let oWon = false;







  moveFirst = function () {
   $('td').one('click', function (event) {
     if (turn === 0) {
       $(this).text(playerOne);
       boxCheck();
       winCheck();
       turn = 1;
       moveSecond();



     }
   });
 };

  moveSecond = function() {
   $('td').one('click', function (event) {
     if(turn === 1) {
       $(this).text(playerTwo);
       boxCheck();
       winCheck();
       turn = 0;
       moveFirst();

     }
   });
 };

 $(document).ready(function () {
   moveFirst();
 });

 boxCheck = function () {
   box0 = $('#box0').html();
   box1 = $('#box1').html();
   box2 = $('#box2').html();
   box3 = $('#box3').html();
   box4 = $('#box4').html();
   box5 = $('#box5').html();
   box6 = $('#box6').html();
   box7 = $('#box7').html();
   box8 = $('#box8').html();
 };

 winCheck = function () {
   if ((box0 === box1 && box0 === box2 && (box0 === "x")) ||
       (box3 === box4 && box3 === box5 && (box3 === "x")) ||
       (box6 === box7 && box6 === box8 && (box6 === "x")) ||
       (box0 === box3 && box0 === box6 && (box0 === "x")) ||
       (box1 === box4 && box1 === box7 && (box1 === "x")) ||
       (box2 === box5 && box2 === box8 && (box2 === "x")) ||
       (box0 === box4 && box0 === box8 && (box0 === "x")) ||
       (box2 === box4 && box2 === box6 && (box2 === "x"))
    ) {
      xWon = true;
      whoWonRestart();
 } else {
   if ((box0 === box1 && box0 === box2 && (box0 === "o")) ||
       (box3 === box4 && box3 === box5 && (box3 === "o")) ||
       (box6 === box7 && box6 === box8 && (box6 === "o")) ||
       (box0 === box3 && box0 === box6 && (box0 === "o")) ||
       (box1 === box4 && box1 === box7 && (box1 === "o")) ||
       (box2 === box5 && box2 === box8 && (box2 === "o")) ||
       (box0 === box4 && box0 === box8 && (box0 === "o")) ||
       (box2 === box4 && box2 === box6 && (box2 === "o"))
    ) {
      oWon = true;
      whoWonRestart();
 } else {
     if (((box0 === "x") || (box0 === "o")) && ((box1 === "x") ||
        (box1 === "o")) && ((box2 === "x") || (box2 === "o")) &&
        ((box3 === "x") || (box3 === "o")) && ((box4 === "x") ||
        (box4 === "o")) && ((box5 === "x") || (box5 === "o")) &&
        ((box6 === "x") || (box6 === "o")) && ((box7 === "x") ||
        (box7 === "o")) && ((box8 === "x") || (box8 === "o"))) {

            alert("Tie Game!");

          }
        }
      }
};

 whoWonRestart = function() {
  if (xWon === true) {
    alert ("Player 1 Wins!");
    clearGrid();
  } else {
    if (oWon === true) {
     alert("Player 2 Wins");
     clearGrid();
    }
  }
};

 clearGrid = $("#clear").click(function (event) {
      box0 = $('#box0').text("");
      box1 = $('#box1').text("");
      box2 = $('#box2').text("");
      box3 = $('#box3').text("");
      box4 = $('#box4').text("");
      box5 = $('#box5').text("");
      box6 = $('#box6').text("");
      box7 = $('#box7').text("");
      box8 = $('#box8').text("");
      xWon = false;
      oWon = false;
      turn = 0;
  
  });
