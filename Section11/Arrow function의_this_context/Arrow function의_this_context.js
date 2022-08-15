const el = document.querySelector("p");

const myObj = {
  register(){
    el.addEventListener("click", function(evt){
        this.printData();
      });
  },
  
  printData() {
    console.log('clicked');
    
  }
}

myObj.register();
// result:
// "error"
// "TypeError: this.printData is not a function
//     at HTMLParagraphElement.<anonymous> (tupihax.js:6:14)"