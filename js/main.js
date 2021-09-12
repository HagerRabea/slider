/**
 * 1- lma ados 3ala ay sora el fixedBox yban
 *
 * 2-el sora eli dost 3liha hya eli tban
 *
 * 3- lma ados 3al close el div y5tfy
 *
 * 4-lma ados 3ala ay mkan fe el div el kber y5tfy
 *
 * 5-a2lb bl ashom ymen we shmal
 *
 * 6- n2lb bl keyboard
 *
 *
 *
 *
 */

var imgs = document.getElementsByClassName("img-fluid");
var fixedBox = document.getElementById("fixedBox");
var smallBox = document.getElementById("smallBox");
var closeBtn = document.getElementById("closeBtn");
var nextBtn = document.getElementById("nextBtn");
var prevBtn = document.getElementById("prevBtn");
var imgArray=[];
var index="";
for(var i=0; i<imgs.length; i++){
    imgArray.push(imgs[i]);
}
for(var i=0; i<imgs.length; i++){
    imgs[i].addEventListener("click",function(e){
        fixedBox.classList.replace("d-none","d-flex");
        var imgClick=e.target;
        index=imgArray.indexOf(imgClick);
        var imgSrc=imgClick.getAttribute("src");
    smallBox.style.backgroundImage= `url(${imgSrc})`;
    })
}
nextBtn.addEventListener("click",function(){
    index++;
    if(index==imgArray.length){
        index=0;
    }
    var x=imgArray[index];
    var imgSrc=x.getAttribute("src");
    smallBox.style.backgroundImage= `url(${imgSrc})`;
})
prevBtn.addEventListener("click",function(){
    index--;
    if(index<0){
        index=imgArray.length-1;
    }
    var x=imgArray[index];
    var imgSrc=x.getAttribute("src");
    smallBox.style.backgroundImage= `url(${imgSrc})`;
})


closeBtn.addEventListener("click",function(){
    fixedBox.classList.replace("d-flex","d-none");
})

fixedBox.addEventListener("click",function(){
 this.classList.replace("d-flex","d-none");
})

smallBox.addEventListener('click', function (e) {

    e.stopPropagation();

})

// document.onkeyup = function (e) {
//     e = e || window.event;
    
//     // 27 is the ESC key
//     if(e.keyCode === 27) modal.style.display = "none";
//     };

    document.addEventListener("keyup",function(e){
        if(e.keyCode == 27){
         fixedBox.classList.replace("d-flex","d-none");
        }
     });

     document.addEventListener("keyup",function(e){
        if(e.keyCode == 39){
                index++;
                if(index==imgArray.length){
                    index=0;
                }
                var x=imgArray[index];
                var imgSrc=x.getAttribute("src");
                smallBox.style.backgroundImage= `url(${imgSrc})`;
            
        }
     });
     document.addEventListener("keyup",function(e){
        if(e.keyCode == 37){
            index--;
            if(index<0){
                index=imgArray.length-1;
            }
            var x=imgArray[index];
            var imgSrc=x.getAttribute("src");
            smallBox.style.backgroundImage= `url(${imgSrc})`;
            
        }
     });
