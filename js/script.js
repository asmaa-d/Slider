let imgs = Array.from( document.querySelectorAll(".item img") );

let layer = document.getElementById("lightBoxContainer");

let lightBoxItem =document.getElementById("lightBoxItem");

let closeIcon = document.getElementById("closeIcon");

let next = document.getElementById("next");

let prev = document.getElementById("prev");

let currentIndex = 0

// click on the Img and make the pop up same img

for(var i = 0 ; i<imgs.length ; i++){
    
    imgs[i].addEventListener("click" , function(e){
        
        layer.style.display = "flex"; 

        imgSrc = e.target.src;
        lightBoxItem.style.backgroundImage = `url(${imgSrc})`

        currentIndex = imgs.indexOf(e.target);
        console.log(currentIndex)
        
    })
}

// close icon
function closeLayer(){
    layer.style.display = "none"
}


//next img of slider
function nextImg(){
    currentIndex ++;

    if(currentIndex == imgs.length){
        currentIndex =0
    }

    imgSrc = imgs[currentIndex].src;
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`
}


//prev img of slider
function prevImg(){
    currentIndex --;

    if(currentIndex == -1){
        currentIndex = 5
    }

    imgSrc = imgs[currentIndex].src;
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}

closeIcon.addEventListener("click" , closeLayer);
//layer.addEventListener("click" , closeLayer)

next.addEventListener("click" , nextImg);

prev.addEventListener("click" , prevImg);


//ArrowLeft to get prev img
document.addEventListener("keydown" , function(e){

    if(e.key == "ArrowLeft"){
        prevImg()
    }
})


//ArrowRight to get next img
document.addEventListener("keydown" , function(e){
    if(e.key == "ArrowRight"){
        nextImg()
    }
})


//Escape to close layer
document.addEventListener("keydown" , function(e){
    if(e.key == "Escape"){
        closeLayer()
    }
})