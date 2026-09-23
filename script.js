const discordCard=document.getElementById("discordCard");
const breachText=document.getElementById("breachText");
const music=document.getElementById("music");

// AK cursor follows the mouse. The normal system cursor is hidden via CSS.

if(discordCard && breachText){
  discordCard.addEventListener("mouseenter",()=>{
    breachText.textContent="SIGNAL BREACH — ACCESS GRANTED";
    breachText.style.opacity="1";
  });
  discordCard.addEventListener("mouseleave",()=>{
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
