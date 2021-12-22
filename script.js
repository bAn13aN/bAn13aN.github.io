var textarea = document.getElementById("textarea");
var tagsEl = document.getElementsByClassName("tags")[0];

textarea.addEventListener("keyup",function(e){
    // console.log(e.target.value);
    createTags(e.target.value);
    if(e.key == "Enter"){
        e.target.value = "";
        randomSelect();
    }
});

function createTags(input){
    /*
        分割根据
        map() 保存键值对，记住键的原始插入顺序
        trim() 删除字符串两端的空白字符
        filter() 将原数组的每个元素传到回调函数中，如果回调函数返回值为true，这个元素保存到新数组中
    */  
     var tags = input.split('，').map(function(tag){
         return tag.trim();
     }).filter(tag => tag);

     tagsEl.innerHTML = "";

     tags.forEach(tag => {
         var tagEl = document.createElement('span');
         tagEl.classList.add('tag');
         tagEl.innerText = tag;
        //  console.log(tag);
         tagsEl.appendChild(tagEl);
     });
}

function randomSelect(){
    var interval = setInterval(function(){
        var randomTag = pickRandomSelect();
        if(randomTag != undefined){
            highlightTag(randomTag);
            setTimeout(function(){
                unhighlight(randomTag);
            },100);
        }
    },100);
    var times = 30;
    setTimeout(function(){
        clearInterval(interval);
        setTimeout(function(){
            var randomTag = pickRandomSelect();
            if(randomTag != undefined){
                highlightTag(randomTag);
            }
        },100)
    },times * 100)
}

function pickRandomSelect(){

    var tags = document.querySelectorAll(".tag");
    return tags[parseInt(Math.random()*tags.length)];

}

/*
    math.random
    [0,1)
*/ 

function highlightTag(tag){
    tag.classList.add("highlight");
}

function unhighlight(tag){
    tag.classList.remove("highlight");
}