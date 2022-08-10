var news = [
    {
        "title" : "sbs",
        "imgurl": "http://staic.naver.sbs",
        "newslist":[
            "newsbs-a",
            "newsbs-b",
            "newsbs-c"]

    },
    {
        "title" : "mbc",
        "imgurl": "http://staic.naver.mbc",
        "newslist":[
            "newmbc-a",
            "newmbc-b",
            "newmbc-c"]

    },
]

/*
let [,mbc] = news;
console.log(mbc);
// result: 
// {
//     title: 'mbc',
//     imgurl: 'http://staic,naver',
//     newslist: [ 'a', 'b', 'c' ]
// }

let {title, imgurl} = mbc;
console.log(title, imgurl);
// result: mbc http://staic,naver
*/

let[,{title, imgurl}] = news;
console.log(imgurl);
// result: http://staic.naver.mbc