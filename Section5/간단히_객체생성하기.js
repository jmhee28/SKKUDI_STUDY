
const name = "crong";
const age = 33;
const obj1 = {
    name: name,
    age: age
}

console.log(obj1);
// result : 
// { name: 'crong', age: 33 }

function getObj(){
    const name = "crong";

    const getName = function(){
        return name;
    }

    const setName = function(newname){
        name = newname;
    }

    const printName = function() {
        console.log(name);
    }

    // return {
    //     getName : getName,
    //     setName : setName
    // }

    return {getName, setName, name}

}

var obj =getObj();

console.log(obj);

// result: 
// {
//     getName: [Function: getName],
//     setName: [Function: setName],
//     name: 'crong'
//   }

const data = {
    name,
    getName(){

    },
    age
}