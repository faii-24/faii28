// =======================================
// ELEMENT
// =======================================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const popup = document.getElementById("popup");
const letterPage = document.getElementById("letterPage");

const openLetter = document.getElementById("openLetter");
const backBtn = document.getElementById("backBtn");

const musicBtn = document.getElementById("musicBtn");
const bgm = document.getElementById("bgm");

const loading = document.getElementById("loading");

const bgHearts = document.getElementById("bg-hearts");

// =======================================
// LOADING
// =======================================

window.addEventListener("load",()=>{

    setTimeout(()=>{

        loading.style.opacity="0";

        setTimeout(()=>{

            loading.style.display="none";

        },600);

    },1800);

});

// =======================================
// FLOATING HEART
// =======================================

function createHeart(){

    const heart=document.createElement("div");

    heart.className="bgHeart";

    const emoji=[
        "💖",
        "💕",
        "💗",
        "💘",
        "❤️"
    ];

    heart.innerHTML=
        emoji[Math.floor(Math.random()*emoji.length)];

    heart.style.left=
        Math.random()*100+"vw";

    heart.style.fontSize=
        (18+Math.random()*20)+"px";

    heart.style.animationDuration=
        (4+Math.random()*5)+"s";

    bgHearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,250);

// =======================================
// BLINK
// =======================================

setInterval(()=>{

    document.querySelectorAll(".eye").forEach((eye)=>{

        eye.style.height="2px";

        setTimeout(()=>{

            eye.style.height="16px";

        },180);

    });

},3000);

// =======================================
// MUSIC
// =======================================

let playing=false;

musicBtn.onclick=()=>{

    if(!playing){

        bgm.play().catch(()=>{});

        playing=true;

        musicBtn.innerHTML="⏸";

    }else{

        bgm.pause();

        playing=false;

        musicBtn.innerHTML="🎵";

    }

};
// =======================================
// TOMBOL NO KABUR
// =======================================

function moveNoButton(){

    const maxX = window.innerWidth - noBtn.offsetWidth - 30;
    const maxY = window.innerHeight - noBtn.offsetHeight - 30;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// =======================================
// CONFETTI HATI
// =======================================

function confetti(){

    for(let i=0;i<80;i++){

        const heart=document.createElement("div");

        heart.innerHTML="💖";

        heart.style.position="fixed";
        heart.style.left="50%";
        heart.style.top="50%";
        heart.style.fontSize=(16+Math.random()*18)+"px";
        heart.style.pointerEvents="none";
        heart.style.zIndex="9999";

        const angle=Math.random()*Math.PI*2;
        const distance=150+Math.random()*250;

        const x=Math.cos(angle)*distance;
        const y=Math.sin(angle)*distance;

        heart.style.transition="all 1.2s ease-out";

        document.body.appendChild(heart);

        requestAnimationFrame(()=>{

            heart.style.transform=`translate(${x}px,${y}px) scale(.3) rotate(${Math.random()*720}deg)`;
            heart.style.opacity="0";

        });

        setTimeout(()=>{

            heart.remove();

        },1300);

    }

}

// =======================================
// YES BUTTON
// =======================================

yesBtn.addEventListener("click",()=>{

    popup.style.display="flex";

    confetti();

    if(!playing){

        bgm.play().catch(()=>{});
        playing=true;
        musicBtn.innerHTML="⏸";

    }

});

// =======================================
// OPEN LETTER
// =======================================

openLetter.addEventListener("click",()=>{

    popup.style.display="none";

    letterPage.style.display="flex";

});

// =======================================
// BACK BUTTON
// =======================================

backBtn.addEventListener("click",()=>{

    letterPage.style.display="none";

});

// =======================================
// ESC KEY
// =======================================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        popup.style.display="none";
        letterPage.style.display="none";

    }

});

// =======================================
// WINDOW EFFECT
// =======================================

const windowBox=document.querySelector(".window");

windowBox.addEventListener("mouseenter",()=>{

    windowBox.style.transform="scale(1.02)";
    windowBox.style.transition=".3s";

});

windowBox.addEventListener("mouseleave",()=>{

    windowBox.style.transform="scale(1)";

});