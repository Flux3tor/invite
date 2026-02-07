function updateCountdown(){
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(24,0,0,0);
  const diff = midnight - now;

  const h = Math.floor(diff / 1000 / 60 / 60);
  const m = Math.floor(diff / 1000 / 60 % 60);
  const s = Math.floor(diff / 1000 % 60);

  const el = document.getElementById("countdown");
  if(el) el.innerText = `${h}H ${m}M ${s}S`;
}

setInterval(updateCountdown,1000);

// Name checker logic
function checkInvite(){
  const name = document.getElementById("nameInput").value;
  if(!name) return;

  const responses = [
    "VIP ACCESS GRANTED 🍾",
    "You were invited by accident.",
    "Security is confused.",
    "Suspicious activity detected.",
    "You are on the list.",
    "You are NOT on the list.",
    "Your lawyer has been notified.",
    "Welcome to the inner circle."
  ];

  const result = responses[Math.floor(Math.random()*responses.length)];

  localStorage.setItem("result", result);
  window.location.href = "/vip.html";
}

