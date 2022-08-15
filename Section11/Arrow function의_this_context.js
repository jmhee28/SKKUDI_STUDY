// const myObj = {
//     runtimeout(){
//         setTimeout(function(){
//             console.log(this === window);
//         }.bind(this), 200);
//     }, 
    
//     printData(){
//         console.log("hi !");
//     }
// }

// myObj.runtimeout();
// true

//bind를 생략-> this 가 가리키는 게 window가 아니라 실행타이밍 이벤트 큐에 있다가 나중에 실행되는 것  
//arrow 는 그 context 를 유지하고 있음
const myObj = {
    runtimeout(){
        setTimeout(() => {
            console.log(this === window);
            this.printData();
        },  200);
    }, 
    
    printData(){
        console.log("hi !");
    }
}

myObj.runtimeout();
//false
//"hi !"