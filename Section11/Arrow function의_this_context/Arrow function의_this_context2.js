

const el = document.querySelector("p");

const myObj = {
  register(){
    el.addEventListener("click", function(evt){
        this.printData();
      }.bind(this));
  },
  
  printData() {
    console.log('clicked');
    
  }
}
// result : "clicked"
const myObj2 = {
    register(){
      el.addEventListener("click", (evt) => {
          this.printData(evt.target); //bind 없이 this 가 가리키는 부분이 선언되는 기준으로
        });
    },
    
    printData(el) {
      console.log('clicked', el.innerText);
      
    }
  }

myObj2.register();
// result:
// "clicked"
// "mydiv"