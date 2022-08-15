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
function fn(tags, name, items){
    //console.log(tags);
    if(typeof items === "undefined"){
        items = "<span style = 'color:red'>주문가능한 상품이 없습니다</span>";
    }
    return (tags[0]+ name + tags[1] + items + tags[2] );
}

data.forEach((v) => {
    let template4 = fn`<h2>welcome ${v.name} !!</h2>
    <h4>주문가능항목</h4><div>${v.items}</div>`;
    document.querySelector("#message").innerHTML += template4;
})
