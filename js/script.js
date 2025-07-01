//////////////////scroll//////////////////////////////////////////////////////
let scrlLine=document.getElementById("scroll-line")
function scrollfunc(){
    let bodyheight=document.body.scrollHeight
    let windowheight=document.documentElement.clientHeight
    let livescrollposition=document.documentElement.scrollTop
    let scrllinewidth=(livescrollposition/(bodyheight-windowheight))*100

    scrlLine.style.width=Math.round(scrllinewidth)+"%"
}
document.addEventListener("scroll",scrollfunc)
///////////////////////////////navbar scroll///////////////////////////////////
let navbar=document.querySelector(".navbar")
window.addEventListener('scroll',()=>{
    if (document.documentElement.scrollTop >= 200) {
    navbar.classList.add("color-scroll-menu")
    navbar.classList.remove("color-fixed-menu")
    }
    else{
        navbar.classList.add("color-fixed-menu")
        navbar.classList.remove("color-scroll-menu")
    }
})
////////////////animatuin text deliciouns heqader////////////

  
let textWrapper = document.querySelector('.delicious-animejs .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: true})
  .add({
    targets: '.delicious-animejs .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.delicious-animejs',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  //////////////////////////////change dish food//////////////////////////////////

let imageDishShow=document.querySelector(".image-dish-show")
let imageDelicions=document.querySelectorAll(".image-delicions")

imageDelicions.forEach(imageDelicion=>{
    imageDelicion.addEventListener("click",()=>{
        imageDishShow.src=imageDelicion.src
    })
})

///////////////////////////////////form ////////////////////////////////
const nameinput = document.getElementById("name");
const email = document.getElementById("email");
const form = document.getElementById("form");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const datetime = document.getElementById('datetime');
const datetimeError = document.getElementById("date-error");

form.addEventListener("submit", (e) => {
    let hasError = false;
    const emailCheck = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.[A-Za-z]{2,4}$/;


    [nameError, emailError, datetimeError].forEach(errorElement => {
        errorElement.innerHTML = "";
    });

    [nameinput, email, datetime].forEach(input => {
        input.classList.remove('input-error');
    });

    if (nameinput.value.trim() === '') {
        e.preventDefault();
        nameError.innerHTML = "Name is required";
        nameinput.classList.add('input-error');
        hasError = true;
    }

    if (!email.value.match(emailCheck)) {
        e.preventDefault();
        emailError.innerHTML = "A valid email is required";
        email.classList.add('input-error');
        hasError = true;
    }

    if (datetime.value.trim() === '') {
        e.preventDefault();
        datetimeError.innerHTML = "Datetime is required";
        datetime.classList.add('input-error');
        hasError = true;
    }

 
    if (!hasError) {
        
    }
});
/////////////////////model video///////////////////////////////

var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//////////////////////////gallery//////////////////////////////////

const initSlider=()=>{
    const sliderButtons=document.querySelectorAll(".slide-button")
    const imageList=document.querySelector(".image-list")
    const maxScrollLeft=imageList.scrollWidth-imageList.clientWidth
    const sliderScrollBar=document.querySelector(".slider-scrollbar")
    const scrollbarThumb=sliderScrollBar.querySelector(".scrollbar-thumb")

     scrollbarThumb.addEventListener("mousedown",(e)=>{
                 const starrX=e.clientX
                 const thumbPosition=scrollbarThumb.offsetLeft;
              
                 const handleMousemove=(e)=>{
                        const deltaX=e.clientX-starrX
                        const newThumbPosition=thumbPosition+deltaX

                        const maxThumbPosition=sliderScrollBar.getBoundingClientRect().width-scrollbarThumb.offsetWidth
                        const boundedPosition=Math.max(0,Math.min(maxThumbPosition,newThumbPosition))
                        const scrollPosition=(boundedPosition/maxThumbPosition)*maxScrollLeft
       
                        scrollbarThumb.style.left=`${boundedPosition}px`
                        imageList.scrollLeft=scrollPosition
                 }
                  const handleMouseup=()=>{
                    document.removeEventListener("mouseover",handleMousemove)
                    document.removeEventListener("mouseup",handleMouseup)
                  }
                 document.addEventListener("mouseover",handleMousemove)
                 document.addEventListener("mouseup",handleMouseup)

     })
    sliderButtons.forEach(button=>{
        button.addEventListener("click",()=>{
            const direction=button.id==="prev-slid"?-1:1;
            const scrollAmount=imageList.clientWidth*direction;
            imageList.scrollBy({left:scrollAmount,behavior:"smooth"})
        })
    })
    const handelSliderButton=()=>{
        sliderButtons[0].style.display=imageList.scrollLeft<=0?"none":"block"
        sliderButtons[1].style.display=imageList.scrollLeft>=maxScrollLeft?"none":"block"

    }
    const updateScrollThumpPosition=()=>{
        const scrollPosition=imageList.scrollLeft
        const thumbPosition=(scrollPosition/maxScrollLeft)*(sliderScrollBar.clientWidth-scrollbarThumb.offsetWidth)
        scrollbarThumb.style.left=`${thumbPosition}px`
    }
    imageList.addEventListener("scroll",()=>{
        handelSliderButton()
        updateScrollThumpPosition()
    })
}
window.addEventListener("load",initSlider)

////////////////////////////////////////////////////////////////////