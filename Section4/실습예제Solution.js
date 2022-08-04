function print()
{
    /*filter, includes, from을 사용해서 문자열 'e'가 포함된 
    노드로 구성된 배열을 만들어서 반환하기 */
    var list = document.querySelectorAll('li');
    
    console.log(toString.call(list));
  
    let newArray = Array.from(list); //li 노드로 구성된 배열
  
    let eArray =newArray.filter(function(v){
      return v.innerText.includes("e");
    });
   return eArray;
    
}

console.log(print());


