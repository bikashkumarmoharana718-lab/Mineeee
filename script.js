const music=document.getElementById("music");
const musicButton=document.getElementById("musicButton");
let musicPlaying=false;

const stars=document.getElementById("stars");
for(let i=0;i<100;i++){
  const s=document.createElement("div");
  s.className="star";
  s.style.left=Math.random()*100+"%";
  s.style.top=Math.random()*100+"%";
  s.style.animationDelay=Math.random()*3+"s";
  stars.appendChild(s);
}

function toggleMusic(){
  if(musicPlaying){
    music.pause();
    musicButton.textContent="🎵 Play Our Song";
    musicPlaying=false;
  }else{
    music.play().then(()=>{
      musicButton.textContent="🔊 Our Song Is Playing";
      musicPlaying=true;
    }).catch(()=>{
      alert("Put your music file in this folder and name it our-song.mp3");
    });
  }
}

function createHeart(){
  const h=document.createElement("div");
  h.className="floating-heart";
  const emojis=["❤️","💕","💗","💖","💓","💞","🌹"];
  h.textContent=emojis[Math.floor(Math.random()*emojis.length)];
  h.style.left=Math.random()*100+"vw";
  h.style.fontSize=18+Math.random()*25+"px";
  h.style.animationDuration=5+Math.random()*6+"s";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),12000);
}
setInterval(createHeart,700);

function forgiveMe(){
  const r=document.getElementById("response");
  r.style.display="block";
  r.innerHTML=`
    <h2>🥹 Thank You, Bby ❤️</h2>
    <p>You have no idea how much that means to me. I promise I won't take your forgiveness for granted.</p>
    <p style="margin-top:15px">I'll work to earn your trust through my actions, not just my words.</p>
    <p style="margin-top:20px">Now... can I have a hug? 🤗❤️</p>`;
  for(let i=0;i<40;i++) setTimeout(createHeart,i*80);
}

function needTime(){
  const r=document.getElementById("response");
  r.style.display="block";
  r.innerHTML=`
    <h2>🥺 I Understand, Bby</h2>
    <p>Take the time you need. I don't want to pressure you into forgiving me.</p>
    <p style="margin-top:15px">Your feelings matter to me, and I'll respect your space. ❤️</p>`;
}
