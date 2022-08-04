function addMark(){
    // arguments -> 인자값을 명시하지 않아도 인자값이 들어왔을 때 배열형태로
    // parameter 개수가 불분명 할 때
    let newData = [];

    for(let i=0; i< arguments.length; i++)
    {
        newData.push(arguments[i]+"!");
    }

    console.log(newData);
}

addMark(1,2,3,4,5);
//result: [ '1!', '2!', '3!', '4!', '5!' ]

function addMark2(){

    let newArray = Array.from(arguments); // arguments 는 array가 아니기 때문에 map 사용 불가-> from 사용

    let newData = newArray.map(function(value){
        return value + "!";
    });
    
    console.log(newData);
}

addMark2(1,2,3,4,5,6,7);

//result : 
//[
//   '1!', '2!',
//   '3!', '4!',
//   '5!', '6!',
//   '7!'
// ]
