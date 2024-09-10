function method1() {
  let buttons = document.querySelectorAll(".drum")
    let audio1 = new Audio("sounds/crash.mp3");
    let audio2 = new Audio("sounds/kick-bass.mp3");
    let audio3 = new Audio("sounds/snare.mp3");
    let audio4 = new Audio("sounds/tom-1.mp3");
    let audio5 = new Audio("sounds/tom-2.mp3");
    let audio6 = new Audio("sounds/tom-3.mp3");
    let audio7 = new Audio("sounds/tom-4.mp3");

    for(let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
      });
    }

    document.addEventListener("keypress", (event) =>{
    makeSound(event.key);
    buttonAnimation(event.key);
    })

    function makeSound(key) {
      switch (key) {
        case "w":
          audio1.play();
        break;

        case "a":
          audio2.play();
        break;
        
        case "s":
          audio3.play();
        break;      
        
        case "d":
          audio4.play();
        break;      
        
        case "j":
          audio5.play();
        break;
        
        case "k":
          audio6.play();
        break;
        
        case "l":
          audio7.play();
        break;

        default:
      }
    }

    function buttonAnimation(currentKey) {
      let activeButton = document.querySelector("." + currentKey);
      activeButton.classList.add("pressed");
      setTimeout(function() {
        activeButton.classList.remove("pressed");
      }, 100);
   }

}
// method1();

function method2() {
   
   let noOfButtons = document.querySelectorAll("button");
   let audio1 = new Audio("sounds/crash.mp3");
   let audio2 = new Audio("sounds/kick-bass.mp3");
   let audio3 = new Audio("sounds/snare.mp3");
   let audio4 = new Audio("sounds/tom-1.mp3");
   let audio5 = new Audio("sounds/tom-2.mp3");
   let audio6 = new Audio("sounds/tom-3.mp3");
   let audio7 = new Audio("sounds/tom-4.mp3");

  //  detecting which screen button pressed.
   for(let i = 0; i < noOfButtons.length; i++) {
    noOfButtons[i].addEventListener("click", function() {
      let buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      makeAnimation(buttonInnerHTML);
     });
   }  

  //  detection which keyboard button pressed.
   document.addEventListener("keypress", function(event) {    
    makeSound(event.key);
    makeAnimation(event.key);
   });

  //  making of animation of which  button or key pressed.  
   function makeAnimation(currentkey) {
      currentkey = document.querySelector("." + currentkey);
      currentkey.classList.add("pressed");
      setTimeout(() => {
         currentkey.classList.remove("pressed")
      }, 100);
   }

    function makeSound(key) {
      switch(key) {
        case "w":
          audio1.play();
        break;

        case "a":
          audio2.play();
        break;

        case "s":
          audio3.play();
        break;

        case "d":
          audio4.play();
        break;

        case "k":
          audio5.play();
        break;  

        case "j":
          audio6.play();
        break;

        case "l":
        audio7.play();
        break;

        default: 
      }
    }
}
method2();