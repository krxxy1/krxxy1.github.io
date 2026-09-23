const cursor=document.getElementById("cursor");const discordCard=document.getElementById("discordCard");const breachText=document.getElementById("breachText");const music=document.getElementById("music");const soundButton=document.getElementById("soundButton");const soundIcon=document.getElementById("soundIcon");const soundText=document.getElementById("soundText");let muted=false;
document.addEventListener("mousemove",e=>{if(cursor){cursor.style.left=e.clientX+"px";cursor.style.top=e.clientY+"px"}});
function active(v){if(cursor)cursor.classList.toggle("active",v)}
discordCard.addEventListener("mouseenter",()=>{active(true);breachText.textContent="SIGNAL BREACH — ACCESS GRANTED";breachText.style.opacity="1"});
discordCard.addEventListener("mouseleave",()=>{active(false);breachText.textContent="HOVER TO BREACH";breachText.style.opacity=".5"});
soundButton.addEventListener("mouseenter",()=>active(true));soundButton.addEventListener("mouseleave",()=>active(false));
music.volume=.15;
function startMusic(){if(!muted)music.play().catch(()=>{});document.removeEventListener("click",startMusic);document.removeEventListener("mousemove",startMusic);document.removeEventListener("keydown",startMusic)}
document.addEventListener("click",startMusic);document.addEventListener("mousemove",startMusic);document.addEventListener("keydown",startMusic);
soundButton.addEventListener("click",e=>{e.stopPropagation();muted=!muted;music.muted=muted;if(!muted)music.play().catch(()=>{});soundIcon.textContent=muted?"🔇":"🔊";soundText.textContent=muted?"MUTE":"SOUND"});
