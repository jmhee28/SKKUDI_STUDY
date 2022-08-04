var list = document.querySelectorAll("li");

for(var i=0; i<list.length; i++){
    list[i].addEventListener("click", function(){
      console.log(i+"번째 리스트 입니다"); // i 는 closure 변수 
     
    });
  }
// result : 
//"4번째 리스트 입니다"
//"4번째 리스트 입니다"
// ...
// i가 밖에 있는 i값과 참조를 계속 함
// => 마지막 값인 4를 공유하면서 생기는 문제

var list = document.querySelectorAll("li");
for(let i=0; i<list.length; i++){
    list[i].addEventListener("click", function(){
      console.log(i+"번째 리스트 입니다"); 
    });
  }
//reusult : 
//"3번째 리스트 입니다"
//"2번째 리스트 입니다"
//"1번째 리스트 입니다"
