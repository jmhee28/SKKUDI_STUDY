
document.querySelector("div").addEventListener("click", function({target}){

  console.log(target.tagName);
  //result : "DIV"
  console.log(target.innerText);
  //result :"newsbs-a"

});

document.querySelector("div").addEventListener("click", function({type,target}){

    console.log(type,target.tagName);
    //"click"
    //"DIV"
    
  });