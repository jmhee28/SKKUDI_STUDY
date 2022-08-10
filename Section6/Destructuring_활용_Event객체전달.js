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

function getNewsList([,{newslist}]){
    console.log(newslist)
}

getNewsList(news);
//result : [ 'newmbc-a', 'newmbc-b', 'newmbc-c' ]