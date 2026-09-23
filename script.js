const cursor=document.getElementById("cursor");
const discordCard=document.getElementById("discordCard");
const breachText=document.getElementById("breachText");
const music=document.getElementById("music");

// AK cursor follows the mouse. The normal system cursor is hidden via CSS.
document.addEventListener("mousemove",e=>{
  if(cursor){
    cursor.style.left=e.clientX+"px";
    cursor.style.top=e.clientY+"px";
  }
});

function active(v){if(cursor)cursor.classList.toggle("active",v)}

if(discordCard && breachText){
  discordCard.addEventListener("mouseenter",()=>{
    active(true);
    breachText.textContent="SIGNAL BREACH — ACCESS GRANTED";
    breachText.style.opacity="1";
  });
  discordCard.addEventListener("mouseleave",()=>{
    active(false);
    breachText.textContent="HOVER TO BREACH";
    breachText.style.opacity=".5";
  });
}

// Background music: try autoplay immediately. Browsers may block unmuted
// autoplay, so the first click/key/mouse movement starts it as a fallback.
music.volume=.15;
music.autoplay=true;
function startMusic(){
  music.play().catch(()=>{});
  document.removeEventListener("click",startMusic);
  document.removeEventListener("keydown",startMusic);
  document.removeEventListener("pointermove",startMusic);
}

music.play().catch(()=>{});
document.addEventListener("click",startMusic,{once:true});
document.addEventListener("keydown",startMusic,{once:true});
document.addEventListener("pointermove",startMusic,{once:true});
