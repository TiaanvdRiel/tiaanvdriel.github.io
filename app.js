
/*
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style","top: "+(e.pageY - scrollY)+"px; left: "+(e.pageX)+"px")
})
*/


const texts = ["Tiaan van der Riel ", "a programmer ", "a future developer "];
let count = 0;
let index = 0;
let currText = "";
let letter = "";

let mouseCursor = document.querySelector(".cursor");

window.addEventListener("mousemove", cursor);

/* ---------------------------------------------------------- */
/* --------------------- Cursor Function -------------------- */
/* ---------------------------------------------------------- */
function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

/* ---------------------------------------------------------- */
/* --------------- Typing Home Screen Function -------------- */
/* ---------------------------------------------------------- */
(async function type() {
    
    if (count === texts.length){
        count  = 0;
    }
    currText = texts[count];
    letter = currText.slice(0, ++index);
    document.querySelector(".typing").textContent = letter;

    /* Go to next word */
    if(letter.length === currText.length) {
        await sleep(2000); 
        count++;
        index = 0;
        //setTimeout(type, 400);
        //clearTimeout;
        
    }
   
    setTimeout(type, 200);

}());

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
 
/* ---------------------------------------------------------- */
/* ------------------- Smooth Scrolling --------------------- */
/* ---------------------------------------------------------- */

function smoothScroll(targetPosition,duration){
    //var target = document.querySelector(target);
    //var targetPosition = target.getBoundingClientRect().top;
    var startPosition = 0; //window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currTime){
        if(startTime === null ) startTime = currTime;
        var timeElapsed = currTime - startTime;
        var run = ease(timeElapsed,startPosition,distance,duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t*t*t + 2) + b;
    };
    

 
    requestAnimationFrame(animation);
}


var  NavAbout = document.querySelector(".NavAbout");
NavAbout.addEventListener("click", function(){
    smoothScroll(1240, 2600);
});

var  NavSkills = document.querySelector(".NavSkills");
NavSkills.addEventListener("click", function(){
    smoothScroll(2240, 3200);
});


var  NavEdu = document.querySelector(".NavEdu");
NavEdu.addEventListener("click", function(){
    smoothScroll(3000, 3800);
});

var  NavAchiev = document.querySelector(".NavAchiev");
NavAchiev.addEventListener("click", function(){
    smoothScroll(4180, 4400);
});

var  NavStory = document.querySelector(".NavStory");
NavStory.addEventListener("click", function(){
    smoothScroll(5500, 5000);
});

var  NavContact = document.querySelector(".NavContact");
NavContact.addEventListener("click", function(){
    smoothScroll(9000, 5600);
});


var  GetInTouch = document.querySelector(".GetInTouch");
GetInTouch.addEventListener("click", function(){
    smoothScroll(9000, 5600);
});

