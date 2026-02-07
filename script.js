setTimeout(()=>{
  const l=document.getElementById("loader");
  if(l) l.style.display="none";
},1800);

function updateCountdown(){
  const now=new Date();
  const midnight=new Date();
  midnight.setHours(24,0,0,0);
  const diff=midnight-now;
  const h=Math.floor(diff/1000/60/60);
  const m=Math.floor(diff/1000/60%60);
  const s=Math.floor(diff/1000%60);
  const el=document.getElementById("countdown");
  if(el) el.innerText=`${h}H ${m}M ${s}S`;
}
setInterval(updateCountdown,1000);

let guests=2481;
setInterval(()=>{
  guests+=Math.floor(Math.random()*3);
  const el=document.getElementById("guests");
  if(el) el.innerText=guests+" guests confirmed worldwide";
},1200);

function toggleMusic(){
  const m=document.getElementById("music");
  if(!m) return;
  m.paused ? m.play() : m.pause();
}

const canvas=document.createElement("canvas");
document.body.appendChild(canvas);
const ctx=canvas.getContext("2d");
canvas.width=innerWidth;
canvas.height=innerHeight;

let particles=Array.from({length:70},()=>({
  x:Math.random()*canvas.width,
  y:Math.random()*canvas.height,
  r:Math.random()*2,
  d:Math.random()*1
}));

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="rgba(212,175,55,.6)";
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
    p.y+=p.d;
    if(p.y>canvas.height) p.y=0;
  });
  requestAnimationFrame(draw);
}
draw();

function checkInvite(){
  const responses=[
    "VIP ACCESS GRANTED 🍾",
    "Security is confused.",
    "You are NOT on the list.",
    "Suspicious activity detected.",
    "Welcome to the inner circle.",
    "You were invited by accident."
  ];
  const result=responses[Math.floor(Math.random()*responses.length)];
  localStorage.setItem("result",result);
  window.location="vip.html";
}
