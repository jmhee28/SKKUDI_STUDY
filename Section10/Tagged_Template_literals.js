const data = [
    {
        name: 'coffee-bean',
        order: true,
        items: ['americano', 'milk', 'grean-tea']
    }, 
    {
        name: 'starbucks',
        order : false,
    }
]
//Tagged_Template_literals

const template =`<div>welcome ${data[0].name} !!</div>
<h2>주문가능항목</h2><div>${data[0].items}</div>`;
console.log(template); 
// result: 
//<div>welcome coffee-bean !!</div>
//<h2>주문가능항목</h2><div>americano,milk,grean-tea</div>

const template2 =`<div>welcome ${data[1].name} !!</div>
<h2>주문가능항목</h2><div>${data[1].items}</div>`;
console.log(template2);
// result:
//<div>welcome starbucks !!</div>
//<h2>주문가능항목</h2><div>undefined</div>

function fn(tags, name, items){
    //console.log(tags);
    if(typeof items === "undefined"){
        items = "주문가능한 상품이 없습니다";
    }
    return (tags[0]+ name + tags[1] + items + tags[2] );
}
const template3 =fn`<div>welcome ${data[1].name} !!</div>
<h2>주문가능항목</h2><div>${data[1].items}</div>`;
console.log(template3);
// //result :
// <div>welcome starbucks !!</div>
// <h2>주문가능항목</h2><div>주문가능한 상품이 없습니다</div>

data.forEach((v) => {
    let template4 = fn`<div>welcome ${v.name} !!</div>
    <h2>주문가능항목</h2><div>${v.items}</div>`;
    console.log(template4);
})
// result : 
// <div>welcome coffee-bean !!</div>
//     <h2>주문가능항목</h2><div>americano,milk,grean-tea</div>
// <div>welcome starbucks !!</div>
//     <h2>주문가능항목</h2><div>주문가능한 상품이 없습니다</div>

